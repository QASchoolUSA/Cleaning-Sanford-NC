import Accordion from "./Accordion";
import Icon from "./Icon";

export default function CommercialCleaningContent() {
  return (
    <div className="prose prose-lg mx-auto text-slate-600 prose-headings:text-[#0f5c5b] prose-a:text-[#0f5c5b] prose-strong:text-slate-900 prose-ul:list-none prose-ul:pl-0">
      <p>
        A clean and professional workspace is essential for productivity and making a good impression on clients. 
        Cleaning Sanford offers comprehensive commercial cleaning services in Sanford, NC, to ensure your business always looks its best.
      </p>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Our Commercial Cleaning Services</h3>
      <p>
        We provide a wide range of commercial cleaning services tailored to the unique needs of your business. Our services include:
      </p>
      <ul>
        <li className="flex items-start gap-3"><Icon name="sparkles" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Office Cleaning:</strong> We offer daily, weekly, and bi-weekly office cleaning services to keep your workspace clean and organized.</span></li>
        <li className="flex items-start gap-3"><Icon name="sparkles" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Janitorial Services:</strong> Our janitorial services include everything from trash removal to restroom sanitation, ensuring a clean and healthy environment for your employees and customers.</span></li>
        <li className="flex items-start gap-3"><Icon name="home" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Retail Cleaning:</strong> We understand the importance of a clean and inviting retail space. Our retail cleaning services will help you attract and retain customers.</span></li>
        <li className="flex items-start gap-3"><Icon name="home" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Shared Area Cleaning:</strong> We also offer cleaning services for shared areas in commercial buildings, such as lobbies, hallways, and elevators.</span></li>
      </ul>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Industries We Serve</h3>
      <p>
        We provide commercial cleaning services to a wide range of industries, including:
      </p>
      <ul>
        <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span>Offices</span></li>
        <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span>Retail stores</span></li>
        <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span>Restaurants</span></li>
        <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span>Medical facilities</span></li>
        <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span>Schools and daycare centers</span></li>
        <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span>And more!</span></li>
      </ul>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Frequently Asked Questions About Commercial Cleaning</h3>
      <Accordion title="What is the difference between commercial cleaning and janitorial services?">
        <p>
          Commercial cleaning typically refers to a one-time or periodic cleaning service, while janitorial services are ongoing, regular cleaning services. We offer both commercial cleaning and janitorial services to meet the needs of your business.
        </p>
      </Accordion>
      <Accordion title="How much does commercial cleaning cost?">
        <p>
          The cost of commercial cleaning depends on the size of your space, the frequency of cleaning, and the specific services you need. We offer free, no-obligation quotes for our commercial cleaning services.
        </p>
      </Accordion>
    </div>
  );
}
