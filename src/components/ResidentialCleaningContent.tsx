
import Accordion from "./Accordion";
import Icon from "./Icon";

export default function ResidentialCleaningContent() {
  return (
    <div className="prose prose-lg mx-auto text-slate-600 prose-headings:text-[#0f5c5b] prose-a:text-[#0f5c5b] prose-strong:text-slate-900 prose-ul:list-none prose-ul:pl-0">
      <p>
        Your home is your sanctuary, a place where you can relax and unwind after a long day. But keeping it clean and tidy can be a never-ending chore. 
        That&#39;s where Cleaning Sanford comes in. We offer professional residential cleaning services in Sanford, NC, and the surrounding areas, 
        so you can enjoy a spotless home without lifting a finger.
      </p>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Our Comprehensive Residential Cleaning Services</h3>
      <p>
        We offer a wide range of residential cleaning services to meet your specific needs. Whether you need a one-time deep clean or regular maintenance, 
        we have a solution for you. Our services include:
      </p>
      <ul>
        <li className="flex items-start gap-3"><Icon name="sparkles" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Standard Cleaning:</strong> Our standard cleaning service is perfect for keeping your home in top shape on a regular basis. We will clean your kitchen, bathrooms, bedrooms, and living areas, so you can always come home to a fresh and tidy space.</span></li>
        <li className="flex items-start gap-3"><Icon name="sparkles" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Deep Cleaning:</strong> Our deep cleaning service is a more thorough version of our standard cleaning. We will get into all the nooks and crannies, cleaning everything from the inside of your oven to the tops of your ceiling fans.</span></li>
        <li className="flex items-start gap-3"><Icon name="home" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Move-In/Move-Out Cleaning:</strong> Moving can be a stressful experience, but our move-in/move-out cleaning service can make it a little easier. We will clean your old home from top to bottom, so you can get your security deposit back, and we will clean your new home, so you can start fresh in a spotless space.</span></li>
        <li className="flex items-start gap-3"><Icon name="home" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Apartment Cleaning:</strong> We also offer apartment cleaning services for tenants and landlords. Whether you need a one-time clean or regular service, we can help you keep your apartment looking its best.</span></li>
      </ul>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Why Choose Cleaning Sanford for Your Residential Cleaning Needs?</h3>
      <p>
        There are many reasons to choose Cleaning Sanford for your residential cleaning needs. Here are just a few:
      </p>
      <ul>
        <li className="flex items-start gap-3"><Icon name="star" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Experienced and Vetted Cleaners:</strong> Our team of cleaners is experienced, professional, and thoroughly vetted. You can trust us to treat your home with the care and respect it deserves.</span></li>
        <li className="flex items-start gap-3"><Icon name="shield" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Eco-Friendly Products:</strong> We use high-quality, eco-friendly cleaning products that are safe for your family and pets. We believe in protecting the environment while providing a top-notch cleaning service.</span></li>
        <li className="flex items-start gap-3"><Icon name="clock" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Flexible Scheduling:</strong> We offer flexible scheduling to fit your busy lifestyle. Whether you need a one-time clean or a recurring service, we can work with you to find a time that is convenient for you.</span></li>
        <li className="flex items-start gap-3"><Icon name="star" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" /><span><strong>Satisfaction Guaranteed:</strong> We are committed to your satisfaction. If you are not happy with our service for any reason, we will come back and make it right.</span></li>
      </ul>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Frequently Asked Questions About Residential Cleaning</h3>
      <Accordion title="What is included in a standard cleaning?">
        <p>
          Our standard cleaning service includes cleaning your kitchen, bathrooms, bedrooms, and living areas. This includes dusting, vacuuming, mopping, and wiping down surfaces.
        </p>
      </Accordion>
      <Accordion title="How often should I have my home professionally cleaned?">
        <p>
          The frequency of professional cleaning depends on your needs and lifestyle. Some of our clients prefer a weekly cleaning, while others opt for a bi-weekly or monthly service. We can work with you to create a cleaning schedule that is right for you.
        </p>
      </Accordion>
      <Accordion title="Do I need to be home during the cleaning?">
        <p>
          No, you do not need to be home during the cleaning. Many of our clients provide us with a key or a code to access their home. However, if you prefer to be home during the cleaning, we are happy to work with you.
        </p>
      </Accordion>
    </div>
  );
}
