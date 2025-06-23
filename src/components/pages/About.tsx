"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Shield, Star, Users } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "photo-1559839734-2b71ea197ec2",
      description: "Leading medical expert with 15+ years in digital health innovation."
    },
    {
      name: "Michael Chen",
      role: "AI Research Director",
      image: "photo-1472099645785-5658abf4ff4e",
      description: "Former Google AI researcher specializing in healthcare applications."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Clinical Advisor",
      image: "photo-1594824388197-82664bf5f730",
      description: "Emergency medicine physician with expertise in patient care optimization."
    },
    {
      name: "David Park",
      role: "Head of Engineering",
      image: "photo-1507003211169-0a1dd7228f2d",
      description: "Tech veteran with experience building scalable healthcare platforms."
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "Foundation",
      description: "MedCare was founded with a vision to democratize healthcare access through AI technology."
    },
    {
      year: "2023",
      title: "AI Development",
      description: "Launched our first AI medical assistant after extensive training on medical literature."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 50+ countries, helping over 1 million users worldwide."
    },
    {
      year: "2024",
      title: "Advanced Features",
      description: "Introduced symptom checking, health monitoring, and family care features."
    }
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      role: "Healthcare Professional",
      content: "MedCare has revolutionized how I provide preliminary guidance to patients. The AI responses are remarkably accurate.",
      rating: 5
    },
    {
      name: "John Smith",
      role: "Patient",
      content: "Having 24/7 access to reliable health information has given me peace of mind, especially during emergencies.",
      rating: 5
    },
    {
      name: "Dr. Lisa Wong",
      role: "Family Physician",
      content: "I recommend MedCare to my patients for quick health questions. It's a valuable complement to professional care.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is MedCare a replacement for seeing a doctor?",
      answer: "No, MedCare is designed to provide general health information and guidance. It should never replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for serious medical concerns."
    },
    {
      question: "How accurate is the AI medical assistant?",
      answer: "Our AI has been trained on extensive medical literature and maintains a 99% accuracy rate for general health information. However, it's important to verify any medical advice with healthcare professionals."
    },
    {
      question: "Is my health information secure?",
      answer: "Yes, we use enterprise-grade encryption and follow strict HIPAA compliance standards. Your health data is never shared with third parties without your explicit consent."
    },
    {
      question: "Can I use MedCare for emergency situations?",
      answer: "MedCare should not be used for medical emergencies. In case of emergency, please call your local emergency services immediately or go to the nearest emergency room."
    },
    {
      question: "Is MedCare available in multiple languages?",
      answer: "Yes, MedCare supports over 20 languages to ensure healthcare information is accessible to diverse communities worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 gradient-medical rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">MedCare</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing healthcare accessibility through AI-powered medical assistance, 
            providing instant, reliable health information to everyone, everywhere.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              MedCare was founded with a simple yet powerful vision: to democratize access to medical 
              knowledge and make healthcare guidance available to everyone, regardless of location or 
              economic status.
            </p>
            <p className="text-gray-600">
              Our AI-powered medical assistant combines cutting-edge technology with trusted medical 
              knowledge to provide instant, accurate health information and guidance when you need it most.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">1M+</div>
                <div className="text-sm text-gray-600">Users Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We care deeply about every user's health and well-being, treating each interaction with empathy and understanding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <Shield className="h-8 w-8 text-teal-600" />
                  </div>
                </div>
                <CardTitle>Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We build trust through transparency, accuracy, and always recommending professional medical consultation when needed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for the highest standards in medical accuracy and user experience through continuous improvement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe healthcare information should be accessible to everyone, breaking down barriers to medical knowledge.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${member.image}?w=150&h=150&fit=crop&crop=face`}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
          <p className="text-yellow-700">
            MedCare is an AI assistant designed to provide general health information and guidance. 
            It is not a substitute for professional medical advice, diagnosis, or treatment. 
            Always consult with qualified healthcare professionals for medical concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
