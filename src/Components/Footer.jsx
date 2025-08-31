import React, { useState } from "react";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import pinint from "../assets/pininterest.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail(""); // reset input
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <footer className="bg-white border-t mt-10">
      <div className="px-5 md:px-10 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-40">
        
        {/* Newsletter */}
        <div className="max-w-md lg:w-[280px]">
          <h3 className="text-lg font-medium mb-2">Be in the know</h3>
          <p className="text-gray-600 text-sm mb-4">
            Get the latest products, promotions, and design tips in your inbox.
            Sign up and get 25% off your first month.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex items-center border rounded-full overflow-hidden w-full"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-transparent text-[#ED6538] border-l border-[#ED6538] text-sm font-medium hover:bg-[#ED6538] hover:text-white transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-medium mb-2">Shop</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-black">The Goods</a></li>
            <li><a href="#" className="hover:text-black">Feather for Business</a></li>
            <li><a href="#" className="hover:text-black">Get design help</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-medium mb-2">Help</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="mailto:hello@livefeather.com" className="hover:text-black">
                hello@livefeather.com
              </a>
            </li>
            <li><a href="#" className="hover:text-black">FAQs</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-medium mb-2">Follow us</h3>
          <div className="flex gap-4 text-gray-700 text-xl">
            <a href="#"><img src={instagram} alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src={twitter} alt="Twitter" className="w-5 h-5" /></a>
            <a href="#"><img src={pinint} alt="Pinterest" className="w-5 h-5" /></a>
            <a href="#"><img src={facebook} alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
