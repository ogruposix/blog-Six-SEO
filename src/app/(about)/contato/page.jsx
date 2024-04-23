import AvatarAnimation from '@/src/components/Contact/AvatarAnimation';
// import ContactForm from '@/src/components/Contact/ContactForm';
import siteMetadata from '@/src/utils/siteMetaData';

export const metadata = {
  title: 'Entre em Contato com a PharmaSix',
  description: `Entre em contato conosco enviando um email para ${siteMetadata.email}`
};

export default function Contact() {
  return (
    <section
      className="w-full h-auto md:h-[85vh] flex flex-col md:flex-row items-center justify-center
      border-b-2 border-solid border-lightGray dark:border-darkGray
      text-dark dark:text-lightText">
      <div
        className="w-3/5 sm:4/5 md:w-2/5 h-full flex justify-center items-center
        md:border-r-2 border-solid border-lightGray dark:border-darkGray">
        <AvatarAnimation />
      </div>
      <div
        className="w-full md:w-3/5 h-full flex flex-col items-center justify-center
        px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl xs:text-4xl sm:text-6xl mb-2">
          Fale conosco!
        </h2>
        <p className="text-lg xs:text-xl font-bold">Através do nosso sac.</p>
        <p className="text-lg xs:text-xl mt-1">
          <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
        </p>

        {/* <ContactForm /> */}
      </div>
    </section>
  );
}
