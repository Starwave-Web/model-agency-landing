import ContactForm from "@/components/ui/contact-form"
import { SECTIONS } from "@/lib/const"

const ContactUs = () => {
  return (
    <section id={SECTIONS.CONTACTUS} className="w-full bg-primary-black">
        <div className="container mx-auto px-6 py-32 md:pt-[10.75rem] md:pb-[6.5625rem] ">
            <div className="flex flex-col items-center">
                <h3 className="primary-gradient-text text-h3-mobile md:text-h3 text-center">Contact Us</h3>
                <p className="primary-gradient-text text-[1.25rem] text-center">for specific questions</p>
            </div>
            <div className="flex flex-col items-center mt-7 max-w-[500px] mx-auto">
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactUs