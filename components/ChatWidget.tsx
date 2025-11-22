
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: '¡Hola! Soy tu asesora experta Fuxion. ¿Tienes dudas sobre qué producto es ideal para ti o cómo tomarlo? Estoy aquí para ayudarte.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize AI client
  // NOTE: In a real production app, calls should go through a backend to protect the API Key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // 1. DEFINICIÓN DE LA BASE DE CONOCIMIENTO (Extracción de datos de la App)
      const productContext = JSON.stringify(PRODUCTS.map(p => ({
        name: p.name,
        category: p.category,
        description: p.description,
        flavor: p.flavor,
        benefits: p.benefits,
        prices: p.prices, // Prices are in USD
        ingredients: p.ingredients,
        preparation: p.preparation,
        weight: p.weight,
        extraInfo: p.extraInfo,
        registration: p.registrationCode
      })));

      // 2. DEFINICIÓN DEL CONTEXTO OPERATIVO (System Instruction)
      const systemInstruction = `
        ROL: Asesora Senior de Ventas y Nutrición Fuxion.
        
        OBJETIVO: Asesorar al cliente (mayoría mujeres) para encontrar el producto ideal, explicar modos de uso y cerrar ventas resaltando beneficios detallados e ingredientes.

        BASE DE CONOCIMIENTO (ESTRICTA - NO INVENTAR):
        Únicamente usa la siguiente lista de productos JSON.
        ${productContext}

        REGLAS DE COMPORTAMIENTO:
        1. **Precios**: Todos los precios están en Dólares Americanos (USD). Si das un precio, añade el símbolo "$".
        2. **Tono**: Amigable, empático, energético y profesional. Usa emojis 🌿💪✨💖. Habla de mujer a mujer cuando sea apropiado para generar confianza.
        3. **Ingredientes y Uso**: Si preguntan por ingredientes o cómo tomarlo, usa EXPLICITAMENTE los campos 'ingredients' y 'preparation' de la base de datos.
        4. **Consultas de Salud**: Si preguntan por enfermedades graves, recomienda el producto según sus beneficios pero sugiere consultar al médico. No recetes, sugiere "complementos nutricionales".
        5. **Desconocido**: Si preguntan por un producto que NO está en la lista JSON (ej: "Línea Cosmética"), responde: "Lo siento, en este catálogo digital específico solo cuento con la información de las líneas de bebidas funcionales mostradas."
        6. **Concisión**: Respuestas cortas y directas. Usa viñetas para beneficios.
        7. **Cierre**: Intenta terminar sugiriendo una acción.
      `;

      // Construct history
      const chatHistory = messages.map(m => `${m.role === 'user' ? 'Cliente' : 'Asesora'}: ${m.text}`).join('\n');
      const finalPrompt = `${chatHistory}\nCliente: ${userMessage}\nAsesora:`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: finalPrompt,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.5, // Lower temperature for more factual adherence to catalog
        }
      });

      const text = response.text || "Lo siento, no pude procesar la información del catálogo en este momento.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error("Error chatting with AI:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Tuve un problema de conexión. Por favor intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Female Advisor Image URL
  const advisorImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[380px] h-[500px] flex flex-col mb-4 overflow-hidden border border-gray-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-fuxion-blue p-4 flex justify-between items-center shadow-sm z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                 <img 
                    src={advisorImage}
                    alt="Asesora Fuxion" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                 />
                 <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-fuxion-blue rounded-full"></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">Asesora Fuxion</h3>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> 
                    <p className="text-blue-100 text-[10px] font-medium uppercase tracking-wide">En línea</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                    <img 
                        src={advisorImage}
                        alt="Avatar"
                        className="w-6 h-6 rounded-full object-cover mr-2 mt-1"
                    />
                )}
                <div 
                  className={`max-w-[85%] p-3.5 text-sm rounded-2xl shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-fuxion-blue text-white rounded-br-none' 
                      : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <img 
                    src={advisorImage}
                    alt="Avatar"
                    className="w-6 h-6 rounded-full object-cover mr-2 mt-1"
                />
                <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s'}}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s'}}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Escribe tu duda..."
              className="flex-1 bg-gray-100 text-gray-700 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-fuxion-blue/30 transition-all"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className={`p-2.5 rounded-full text-white transition-all transform active:scale-95 ${
                !inputValue.trim() || isLoading 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-fuxion-blue hover:bg-fuxion-darkBlue shadow-md'
              }`}
            >
              <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button (FAB) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-fuxion-blue hover:bg-fuxion-darkBlue text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group border-2 border-white overflow-hidden"
        >
          {/* Avatar in FAB */}
          <img 
            src={advisorImage}
            alt="Asesora" 
            className="w-full h-full object-cover"
          />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}
    </div>
  );
};
