
import Accordion from "./Accordion";
import Icon from "./Icon";

export default function MoveOutCleaningContent() {
    return (
        <div className="prose prose-lg mx-auto text-slate-600 prose-headings:text-[#0f5c5b] prose-a:text-[#0f5c5b] prose-strong:text-slate-900 prose-ul:list-none prose-ul:pl-0">
            <p>
                Moving is one of life&#39;s most stressful events. Between packing boxes, coordinating movers, and setting up your new place, cleaning your old home is often the last thing on your mind.
                However, leaving a clean property is essential for getting your security deposit back or ensuring a smooth sale. <strong>Cleaning Sanford</strong> offers professional <strong>move-out cleaning services in Sanford, NC</strong>, tailored to meet the strict standards of landlords and property managers.
            </p>

            <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Comprehensive Move-In & Move-Out Cleaning</h3>
            <p>
                Whether you are a tenant hoping to reclaim your deposit, a landlord preparing a rental, or a homeowner getting ready to sell, our <strong>vacancy cleaning</strong> services are the solution.
                We go far beyond a standard clean to ensure every inch of the property is presentable.
            </p>
            <ul>
                <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Kitchen Deep Clean:</strong> We degrease range hoods, scrub inside ovens and refrigerators, wipe down cabinets inside and out, and sanitize countertops and sinks.</span></li>
                <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Bathroom Sanitization:</strong> Removal of soap scum, limescale, and mildew from showers and tubs. Toilets, sinks, and mirrors are left sparkling and hygienic.</span></li>
                <li className="flex items-start gap-3"><Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Living Areas & Bedrooms:</strong> We clean baseboards, dust blinds and window sills, wipe down doors and frames, and vacuum/mop all floors to remove accumulated dust.</span></li>
            </ul>

            <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Why Choose Us for Your Vacancy Cleaning?</h3>
            <p>
                Don&#39;t leave your security deposit to chance. Amateur cleaning often results in missed spots and deductions from your refund. By hiring <strong>Cleaning Sanford</strong>, you are investing in a professional result.
            </p>
            <ul>
                <li className="flex items-start gap-3"><Icon name="star" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Deposit Back Guarantee:</strong> We know what inspectors look for. If an area we cleaned doesn&#39;t pass inspection, let us know within 24 hours and we will re-clean it for free.</span></li>
                <li className="flex items-start gap-3"><Icon name="clock" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Last Minute Availability:</strong> Moving often involves unexpected schedule changes. We do our best to accommodate last-minute <strong>move out cleaning</strong> requests in Sanford and Jonesboro.</span></li>
            </ul>

            <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Move Out Cleaning FAQs</h3>
            <Accordion title="How long does a move-out clean take?">
                <p>
                    The duration depends on the size and condition of the home. A typical 3-bedroom home may take 4-8 hours for a deep move-out clean. We can provide a more accurate estimate when you contact us with details about your property.
                </p>
            </Accordion>
            <Accordion title="Is carpet cleaning included?">
                <p>
                    Standard vacuuming is included. If professional steam carpet cleaning is required (often a lease requirement), we can recommend trusted local partners or arrange it as a specialized add-on service.
                </p>
            </Accordion>
            <Accordion title="Do you clean inside appliances?">
                <p>
                    Yes! Cleaning inside the fridge, oven, and microwave is a standard part of our move-in/move-out checklist, whereas it is usually an extra charge for recurring residential services.
                </p>
            </Accordion>
        </div>
    );
}
