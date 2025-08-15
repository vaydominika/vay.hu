"use client";

import { Button, Card } from '../components/ui';
import Navbar from '../components/Navbar';

export default function WorkTogetherPage() {
  return (
    <div id="work-together" className="w-[1920px] h-[1080px] bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      <Navbar />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-third rounded-full"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border border-third rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border border-third rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-third rounded-full"></div>
      </div>
      
      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16 text-center">
        <h1 className="text-6xl font-bold text-third mb-6">
          Let's Work Together
        </h1>
        <p className="text-2xl text-third/70 max-w-4xl mx-auto px-8">
          Ready to bring your ideas to life? I'm here to help you create amazing digital experiences
        </p>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 px-16">
        <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card 
            backgroundColor="rgba(255, 255, 255, 0.95)"
            borderRadius="1.5rem"
            padding="2.5rem"
            className="backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-third mb-8">Get In Touch</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-third font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-third focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-third font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-third focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-third font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-third focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-third font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-third focus:border-transparent outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-third font-medium mb-2">Project Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-third focus:border-transparent outline-none transition-all">
                  <option>Select a project type</option>
                  <option>Website Development</option>
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-third font-medium mb-2">Project Description</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-third focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-third font-medium mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-third focus:border-transparent outline-none transition-all">
                  <option>Select budget range</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000+</option>
                  <option>To be discussed</option>
                </select>
              </div>
              
              <Button 
                color="var(--third-color)"
                textColor="var(--primary-color)"
                borderRadius="1rem"
                onClick={() => console.log('Form submitted')}
                className="w-full py-4 text-lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Information & Process */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card 
              backgroundColor="rgba(255, 255, 255, 0.95)"
              borderRadius="1.5rem"
              padding="2rem"
              className="backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-third mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-third/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-third">Email</p>
                    <p className="text-third/70">john.doe@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-third/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-third">Phone</p>
                    <p className="text-third/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-third/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-third">Location</p>
                    <p className="text-third/70">San Francisco, CA (Remote Available)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-third/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <p className="font-medium text-third">Response Time</p>
                    <p className="text-third/70">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Work Process */}
            <Card 
              backgroundColor="rgba(255, 255, 255, 0.95)"
              borderRadius="1.5rem"
              padding="2rem"
              className="backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-third mb-6">How We'll Work Together</h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Discovery", desc: "We'll discuss your project requirements and goals" },
                  { step: "02", title: "Planning", desc: "I'll create a detailed project plan and timeline" },
                  { step: "03", title: "Development", desc: "Building your project with regular updates" },
                  { step: "04", title: "Testing", desc: "Thorough testing and quality assurance" },
                  { step: "05", title: "Launch", desc: "Deployment and post-launch support" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-third text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-third">{item.title}</h4>
                      <p className="text-third/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Quick Actions */}
            <div className="flex gap-4">
              <Button 
                color="var(--secondary-color)"
                textColor="var(--third-color)"
                borderRadius="1rem"
                onClick={() => console.log('Schedule call clicked')}
                className="flex-1 py-3"
              >
                Schedule a Call
              </Button>
              <Button 
                color="var(--third-color)"
                textColor="var(--primary-color)"
                borderRadius="1rem"
                onClick={() => console.log('Download portfolio clicked')}
                className="flex-1 py-3"
              >
                Download Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-third/60 text-center">
          Ready to start your project? Let's create something amazing together! 🚀
        </p>
      </div>
    </div>
  );
}
