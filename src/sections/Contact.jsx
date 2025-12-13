function Contact() {
  return (
    <section id="contact" className="py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        {/* Card: Email */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full md:w-72 text-center">
          <h3 className="font-semibold mb-2">E-mail</h3>
          <a
            href="mailto:httpmichel15cesar@gmail.com"
            className="text-blue-600 hover:underline break-all"
          >
            httpmichel15cesar@gmail.com
          </a>
        </div>

        {/* Card: Telefone */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full md:w-64 text-center">
          <h3 className="font-semibold mb-2">Telefone</h3>
          <a href="tel:+244928536339" className="text-blue-600 hover:underline">
            (+244) 928 536 339
          </a>
        </div>

        

        {/* Card: Github */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full md:w-64 text-center">
          <h3 className="font-semibold mb-2">Github</h3>
          <a
            href="https://github.com/devmichel15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @devmichel15
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
