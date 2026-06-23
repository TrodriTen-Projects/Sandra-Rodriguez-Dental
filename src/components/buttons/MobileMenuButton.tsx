type MobileMenuButtonProps = {
  isOpen: boolean;
  setIsOpen: (Status: boolean) => void,
};

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, setIsOpen }) => (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary py-2"
        aria-label="burger-menu"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  );
  
  export default MobileMenuButton;
  