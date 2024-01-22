const Pricing = () => {
  return (
    <div className="pricing">
      <span className="pricing__title">// Prijzen</span>
      
      <div className="pricing-container">
          <div className="pricing-component">
            <div className="pricing-component__simple">
              <span>Starter</span>
              <h2>Vanaf 950</h2>
              <ul>
                <li><span>Ideaal voor starters:</span> Perfect voor kleine bedrijven of persoonlijke projecten.</li>
                <li><span>Snel en Efficiënt:</span> Basisontwerp met gebruiksvriendelijke navigatie en responsieve layout.</li>
                <li><span>Standaardfuncties Inbegrepen:</span> Contactformulier, social media-integratie, en basis SEO-optimalisatie.</li>
                <li><span>Aanpasbaar Ontwerp:</span> Keuze uit diverse sjablonen die passen bij uw merkidentiteit.</li>
                <li><span>Gebruiksvriendelijk Beheersysteem:</span> Eenvoudig zelf content bijwerken en beheren.</li>
              </ul>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__webshop">
              <span>Webshop</span>
              <h2>Vanaf 1899</h2>
              <ul>
              <li><span>Voor E-commerce Succes:</span> Ideaal voor middelgrote bedrijven die online willen verkopen.</li>
              <li><span>Geavanceerde Functies:</span> Productcatalogus, winkelwagentje, en veilige betaalmethoden.</li>
              <li><span>Optimalisatie voor Conversie:</span> Ontworpen om bezoekers in klanten te converteren.</li>
              <li><span>Responsief Ontwerp:</span> Uitstekende winkelervaring op zowel desktop als mobiele apparaten.</li>
              <li><span>Integratie met Sociale Media:</span> Vergroot uw bereik en verkoop via sociale mediaplatforms.</li>
              </ul>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__custom">
              <span>Custom</span>
              <h2>Vanaf 3500</h2>
              <ul>
              <li><span>Volledig Op Maat:</span> Unieke oplossingen voor complexe eisen en specifieke wensen.</li>
              <li><span>Geavanceerde Functionaliteit:</span> Integratie van databases, API's, en speciale toepassingen.</li>
              <li><span>Persoonlijke Benadering:</span> Intensieve samenwerking voor een website die volledig aansluit bij uw visie.</li>
              <li><span>Zoekmachine Optimalisatie:</span> Geavanceerde SEO-strategieën voor maximale online zichtbaarheid.</li>
              <li><span>Doorlopende Ondersteuning:</span> Opties voor onderhoud en updates om uw website actueel te houden.</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;
