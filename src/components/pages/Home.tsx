"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Database,
  GraduationCap,
  Heart,
  Lock,
  MessageSquare,
  Play,
  Star,
  User,
  UserCog,
  Users,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: "Instant Medical Q&A",
      description: "Get immediate answers to your health questions from our AI-powered medical assistant."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access medical guidance anytime, anywhere. Our AI never sleeps when you need help."
    },
    {
      icon: User,
      title: "Personalized Responses",
      description: "Receive tailored medical information based on your specific symptoms and concerns."
    },
    {
      icon: Database,
      title: "Trusted Medical Sources",
      description: "All responses are backed by verified medical literature and clinical guidelines."
    },
    {
      icon: Lock,
      title: "HIPAA-Friendly & Private",
      description: "Your health data is protected with enterprise-grade security and privacy measures."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "MedCare helped me understand my symptoms before my doctor's appointment. The responses were clear and reassuring.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Dr. Michael Chen",
      role: "Family Physician",
      content: "I recommend MedCare to my patients for quick health information. It's accurate and helps them prepare for consultations.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Caregiver",
      content: "As a caregiver for my elderly mother, MedCare provides instant guidance when I need it most.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const useCases = [
    {
      icon: Heart,
      title: "For Patients",
      description: "Get instant answers to health questions, understand symptoms, and prepare for doctor visits.",
      features: ["Symptom checker", "Medicine information", "Health tips"]
    },
    {
      icon: UserCog,
      title: "For Caregivers",
      description: "Support your loved ones with reliable medical information and emergency guidance.",
      features: ["Emergency protocols", "Care instructions", "Medication reminders"]
    },
    {
      icon: GraduationCap,
      title: "For Medical Students",
      description: "Enhance your learning with instant access to medical knowledge and case studies.",
      features: ["Case studies", "Medical terminology", "Study assistance"]
    }
  ];

  const faqItems = [
    {
      question: "Is MedCare a replacement for seeing a doctor?",
      answer: "No, MedCare is an AI assistant that provides medical information for educational purposes. Always consult with qualified healthcare professionals for medical diagnosis and treatment."
    },
    {
      question: "How accurate is the medical information provided?",
      answer: "Our AI is trained on verified medical literature and clinical guidelines. However, individual cases may vary, and professional medical consultation is always recommended."
    },
    {
      question: "Is my health information secure?",
      answer: "Yes, we use enterprise-grade encryption and follow HIPAA guidelines to ensure your health data remains private and secure."
    },
    {
      question: "Can I use MedCare for emergency situations?",
      answer: "MedCare is not intended for medical emergencies. In case of emergency, call your local emergency services or go to the nearest emergency room."
    },
    {
      question: "What types of medical questions can I ask?",
      answer: "You can ask about symptoms, medications, general health information, and wellness tips. We cannot provide specific diagnoses or treatment recommendations."
    }
  ];

  const blogPosts = [
    {
      title: "Understanding Common Cold vs. Flu Symptoms",
      excerpt: "Learn to differentiate between cold and flu symptoms with our comprehensive guide.",
      readTime: "5 min read",
      category: "Health Tips"
    },
    {
      title: "The Importance of Regular Health Checkups",
      excerpt: "Discover why preventive care is crucial for maintaining long-term health.",
      readTime: "7 min read",
      category: "Preventive Care"
    },
    {
      title: "Mental Health: Breaking the Stigma",
      excerpt: "Addressing mental health concerns and the importance of seeking help.",
      readTime: "6 min read",
      category: "Mental Health"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-medical-light min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              id="hero-content"
              data-animate
              className={`${animatedElements.has('hero-content') ? 'animate-fade-in' : 'opacity-0'}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Personal{" "}
                <span className="text-gradient">AI Medical</span>{" "}
                Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ask any medical question. Get instant, accurate, AI-powered answers 
                backed by trusted medical sources. Available 24/7 for your health needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/chat">
                  <Button size="lg" className="gradient-medical text-white hover:shadow-lg">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Ask a Question
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="lg" variant="outline" className="border-2">
                    Sign Up Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div 
              id="hero-image"
              data-animate
              className={`${animatedElements.has('hero-image') ? 'animate-scale-in' : 'opacity-0'} lg:animate-float`}
            >
              <div className="relative">
                <div className="glass-effect rounded-2xl p-8 border">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 gradient-medical rounded-full">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">AI Medical Assistant</h3>
                      <p className="text-green-600 text-sm">● Online and ready to help</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">"I have a persistent headache for 3 days..."</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700">Based on your symptoms, here are some possible causes and recommendations...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="how-it-works-header"
            data-animate
            className={`text-center mb-16 ${animatedElements.has('how-it-works-header') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get medical guidance in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Ask", description: "Type your medical question or describe your symptoms", icon: MessageSquare },
              { step: "2", title: "Analyze", description: "Our AI processes your query using medical knowledge", icon: Zap },
              { step: "3", title: "Answer", description: "Receive instant, personalized medical guidance", icon: CheckCircle }
            ].map((item, index) => (
              <div 
                key={index}
                id={`step-${index}`}
                data-animate
                className={`text-center ${animatedElements.has(`step-${index}`) ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 gradient-medical rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="features-header"
            data-animate
            className={`text-center mb-16 ${animatedElements.has('features-header') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets medical expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`hover:shadow-lg transition-all duration-300 ${animatedElements.has(`feature-${index}`) ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 gradient-medical rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="demo-header"
            data-animate
            className={`text-center mb-16 ${animatedElements.has('demo-header') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See It In Action</h2>
            <p className="text-xl text-gray-600">Try our medical AI assistant with a live demo</p>
          </div>
          <div 
            id="demo-card"
            data-animate
            className={`max-w-4xl mx-auto ${animatedElements.has('demo-card') ? 'animate-scale-in' : 'opacity-0'}`}
          >
            <Card className="glass-effect border-2">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Button className="gradient-medical" size="lg">
                    <Play className="mr-2 h-5 w-5" />
                    Try Live Demo
                  </Button>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700">"What are the common symptoms of dehydration?"</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-medical rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 mb-2">
                        <strong>Common dehydration symptoms include:</strong>
                      </p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Increased thirst and dry mouth</li>
                        <li>• Fatigue and dizziness</li>
                        <li>• Dark-colored urine</li>
                        <li>• Headache and confusion</li>
                      </ul>
                      <p className="text-sm text-gray-500 mt-3">
                        💡 If symptoms persist, consult a healthcare professional.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 gradient-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="testimonials-header"
            data-animate
            className={`text-center mb-16 ${animatedElements.has('testimonials-header') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of users worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`${animatedElements.has(`testimonial-${index}`) ? 'animate-slide-in-right' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-blue-600">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="use-cases-header"
            data-animate
            className={`text-center mb-16 ${animatedElements.has('use-cases-header') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Benefits from MedCare?</h2>
            <p className="text-xl text-gray-600">AI-powered medical assistance for everyone</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                id={`use-case-${index}`}
                data-animate
                className={`hover:shadow-lg transition-all duration-300 ${animatedElements.has(`use-case-${index}`) ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 gradient-medical rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 gradient-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="pricing-header"
            data-animate
            className={`text-center mb-16 ${animatedElements.has('pricing-header') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              id="pricing-free"
              data-animate
              className={`${animatedElements.has('pricing-free') ? 'animate-scale-in' : 'opacity-0'}`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Free Plan</CardTitle>
                <div className="text-3xl font-bold text-gray-900">$0<span className="text-lg font-normal text-gray-500">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    5 questions per day
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Basic medical information
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Community support
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Get Started Free</Button>
              </CardContent>
            </Card>

            <Card 
              id="pricing-pro"
              data-animate
              className={`border-2 border-blue-500 relative ${animatedElements.has('pricing-pro') ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '200ms' }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro Plan</CardTitle>
                <div className="text-3xl font-bold text-gray-900">$19<span className="text-lg font-normal text-gray-500">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Unlimited questions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Detailed medical analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Health tracking features
                  </li>
                </ul>
                <Button className="w-full gradient-medical">Start Pro Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="faq-header"
            data-animate
            className={`text-center mb-16 ${animatedElements.has('faq-header') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about MedCare</p>
          </div>
          <div 
            id="faq-accordion"
            data-animate
            className={`${animatedElements.has('faq-accordion') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Blog/Resource Highlights */}
      <section className="py-20 gradient-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="blog-header"
            data-animate
            className={`text-center mb-16 ${animatedElements.has('blog-header') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Health Resources</h2>
            <p className="text-xl text-gray-600">Stay informed with our latest medical articles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                id={`blog-${index}`}
                data-animate
                className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${animatedElements.has(`blog-${index}`) ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-500 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 gradient-medical text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="cta-content"
            data-animate
            className={`${animatedElements.has('cta-content') ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-4">Join 10,000+ Users Getting Instant Medical Answers!</h2>
            <p className="text-xl opacity-90 mb-8">
              Start your journey to better health with AI-powered medical guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Users className="mr-2 h-5 w-5" />
                  Sign Up Free Today
                </Button>
              </Link>
              <Link href="/chat">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Try It Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
