
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-primary">Birne</span>
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              Tvoríme digitálne zážitky, ktoré majú zmysel
            </p>
          </div>
        </div>
        
        <div className="border-t border-border/50 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>© {currentYear} Birne s.r.o. Všetky práva vyhradené. Birne s.r.o. - Albina Brunovskeho 6, 841 05 Bratislava.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Súkromie</a>
            <a href="#" className="hover:text-primary transition-colors">Podmienky</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie politika</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
