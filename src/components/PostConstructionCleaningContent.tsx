import Accordion from "./Accordion";
import Icon from "./Icon";

export default function PostConstructionCleaningContent() {
  return (
    <div className="prose prose-lg mx-auto text-slate-600 prose-headings:text-[#0f5c5b] prose-a:text-[#0f5c5b] prose-strong:text-slate-900 prose-ul:list-none prose-ul:pl-0">
      <p>
        Construction and renovation projects can leave behind a lot of dust and debris. 
        Cleaning Sanford offers professional post-construction cleaning services in Sanford, NC, to get your new space ready for occupancy.
      </p>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Our Post-Construction Cleaning Services</h3>
      <p>
        Our post-construction cleaning services are designed to handle the unique challenges of cleaning up after a construction project. Our services include:
      </p>
      <ul>
        <li className="flex items-start gap-3"><Icon name="sparkles" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Debris Removal:</strong> We will remove all construction debris, including dust, dirt, and leftover materials.</span></li>
        <li className="flex items-start gap-3"><Icon name="sparkles" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Detailed Cleaning:</strong> We will perform a detailed cleaning of the entire space, including washing walls, cleaning windows, and polishing fixtures.</span></li>
        <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Floor Care:</strong> We will clean and care for all types of flooring, including carpet, hardwood, and tile.</span></li>
      </ul>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Why Choose Us for Your Post-Construction Cleaning Needs?</h3>
      <p>
        We have the experience and expertise to handle any post-construction cleaning project, big or small. Here are just a few reasons to choose us:
      </p>
      <ul>
        <li className="flex items-start gap-3"><Icon name="star" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Experienced and Trained Team:</strong> Our team is trained to handle the specific challenges of post-construction cleaning.</span></li>
        <li className="flex items-start gap-3"><Icon name="shield" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Specialized Equipment:</strong> We use specialized equipment to ensure a thorough and efficient cleaning.</span></li>
        <li className="flex items-start gap-3"><Icon name="clock" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Flexible Scheduling:</strong> We can work with your schedule to ensure that your new space is ready when you need it.</span></li>
      </ul>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Frequently Asked Questions About Post-Construction Cleaning</h3>
      <Accordion title="When should I schedule a post-construction cleaning?">
        <p>
          It&#39;s best to schedule your post-construction cleaning after all construction work is complete, but before you move in any furniture or belongings.
        </p>
      </Accordion>
      <Accordion title="How long does a post-construction cleaning take?">
        <p>
          The duration of a post-construction cleaning depends on the size of the space and the extent of the cleaning required. We can provide you with a time estimate when you request a quote.
        </p>
      </Accordion>
    </div>
  );
}
