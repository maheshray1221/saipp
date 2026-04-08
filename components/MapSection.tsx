export default function MapSection() {
  return (
    <div className="w-full px-4 md:px-10 py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Our Location</h2>
        <p className="text-gray-500 text-sm">Visit our facility anytime</p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.596923708564!2d79.3825724!3d28.999312999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a081bdeb4106c7%3A0x5f82a235a8f4ab2c!2sSai%20paper%20products!5e0!3m2!1sen!2sin!4v1774587397693!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}