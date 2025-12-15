import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+923001234567";
  const whatsappMessage = encodeURIComponent(
    "Hello, I'm interested in learning more about Drago Impex products and services."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20BD5A] transition-all duration-300 hover:scale-105">
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold text-sm hidden sm:block whitespace-nowrap">
          Chat with us
        </span>
      </div>
      
      {/* Tooltip on mobile */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none sm:hidden">
        <div className="bg-card border border-border px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          <span className="text-sm text-foreground">Chat on WhatsApp</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
