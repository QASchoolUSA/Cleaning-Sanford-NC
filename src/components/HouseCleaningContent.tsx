
import Accordion from "./Accordion";
import Icon from "./Icon";

export default function HouseCleaningContent() {
    return (
        <div className="prose prose-lg mx-auto text-slate-600 prose-headings:text-[#0f5c5b] prose-a:text-[#0f5c5b] prose-strong:text-slate-900 prose-ul:list-none prose-ul:pl-0">
            <p>
                Maintaining a clean and organized home is essential for your comfort and well-being, but finding the time to do it effectively can be a challenge.
                <strong>Cleaning Sanford</strong> provides top-tier <strong>house cleaning services in Sanford, NC</strong>, giving you the freedom to enjoy your free time while we ensure your home sparkles.
            </p>

            <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Professional Maid Services You Can Trust</h3>
            <p>
                Our team of dedicated professionals offers more than just a surface clean. We provide a comprehensive <strong>maid service</strong> designed to meet the unique needs of homeowners in Sanford and Lee County.
                From dusting ceiling fans to scrubbing baseboards, we take pride in our attention to detail.
            </p>
            <ul>
                <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Recurring Housekeeping:</strong> Keep your home consistently clean with our weekly, bi-weekly, or monthly cleaning schedules. We handle the routine chores so you don&#39;t have to.</span></li>
                <li className="flex items-start gap-3"><Icon name="sparkles" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Deep House Cleaning:</strong> Perfect for spring cleaning or getting ready for a special event. Our deep cleaning service targets hidden dirt, grime build-up, and neglected areas for a truly fresh start.</span></li>
                <li className="flex items-start gap-3"><Icon name="home" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Specialized Cleaning:</strong> We can customize our services to include interior window cleaning, refrigerator cleaning, and oven cleaning, ensuring every appliance and surface is spotless.</span></li>
            </ul>

            <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">The Best House Cleaning in Sanford</h3>
            <p>
                When searching for &quot;cleaning services near me,&quot; you want a company that is reliable, trustworthy, and effective. Here is why Cleaning Sanford is the preferred choice for local homeowners:
            </p>
            <ul>
                <li className="flex items-start gap-3"><Icon name="shield" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Licensed & Insured:</strong> We are a fully professional cleaning company, giving you peace of mind that your property is protected.</span></li>
                <li className="flex items-start gap-3"><Icon name="star" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Trained Staff:</strong> Every member of our team undergoes rigorous training to ensure they meet our high standards of quality and efficiency.</span></li>
                <li className="flex items-start gap-3"><Icon name="clock" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Reliable &amp; Punctual:</strong> We respect your time. You can count on us to arrive as scheduled and complete the job efficiently.</span></li>
            </ul>

            <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Common Questions About Our House Cleaning</h3>
            <Accordion title="Do I need to provide cleaning supplies?">
                <p>
                    No, we bring all the necessary professional-grade cleaning equipment and supplies. If you have specific products you prefer us to use due to allergies or personal preference, just let us know, and we will happy to use them.
                </p>
            </Accordion>
            <Accordion title="Can I trust the cleaners in my home?">
                <p>
                    Absolutely. All our employees undergo strict background checks and vetting processes. We are a locally trusted <strong>Cleaning Sanford</strong> business, and our reputation is built on trust and integrity.
                </p>
            </Accordion>
            <Accordion title="What areas do you serve?">
                <p>
                    We proudly serve Sanford, Jonesboro, Lillington, Broadway, and the surrounding areas in Lee County, NC.
                </p>
            </Accordion>
        </div>
    );
}
