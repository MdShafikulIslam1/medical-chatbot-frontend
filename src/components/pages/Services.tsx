"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Bell, Brain, Clock, FileText, Heart, MessageSquare, Shield, Stethoscope, Users } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Medical Chat",
      description: "Get instant answers to your health questions from our advanced AI assistant, available 24/7.",
      features: ["Instant responses", "Multi-language support", "Symptom analysis", "Health guidance"],
      color: "blue",
      popular: true
    },
    {
      icon: Brain,
      title: "Symptom Checker",
      description: "Describe your symptoms and get preliminary guidance on potential causes and next steps.",
      features: ["Interactive assessment", "Risk evaluation", "Treatment suggestions", "Doctor recommendations"],
      color: "teal"
    },
    {
      icon: Stethoscope,
      title: "Health Monitoring",
      description: "Track your health metrics and receive personalized insights and recommendations.",
      features: ["Vital signs tracking", "Progress monitoring", "Health trends", "Alerts & reminders"],
      color: "purple"
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Manage health information for your entire family with secure, organized profiles.",
      features: ["Multiple profiles", "Age-specific guidance", "Medication tracking", "Appointment reminders"],
      color: "green"
    },
    {
      icon: Bell,
      title: "Health Alerts",
      description: "Receive timely reminders for medications, appointments, and health checkups.",
      features: ["Medication reminders", "Appointment alerts", "Health milestones", "Custom notifications"],
      color: "orange"
    },
    {
      icon: FileText,
      title: "Health Reports",
      description: "Generate comprehensive health reports based on your interactions and health data.",
      features: ["Detailed analytics", "Progress tracking", "Trend analysis", "Export options"],
      color: "indigo"
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for individuals getting started with AI health assistance",
      features: [
        "5 chat sessions per day",
        "Basic symptom checker",
        "General health information",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99/month",
      description: "Advanced features for comprehensive health management",
      features: [
        "Unlimited chat sessions",
        "Advanced symptom analysis",
        "Health monitoring tools",
        "Family profiles (up to 5)",
        "Priority support",
        "Health reports"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Family",
      price: "$19.99/month",
      description: "Complete health solution for families and small groups",
      features: [
        "Everything in Premium",
        "Unlimited family profiles",
        "Advanced health analytics",
        "Medication management",
        "Priority chat support",
        "Custom health plans"
      ],
      buttonText: "Choose Family",
      popular: false
    }
  ];

  const specialties = [
    {
      name: "General Medicine",
      description: "Common health concerns and general medical guidance",
      icon: Heart
    },
    {
      name: "Mental Health",
      description: "Mental wellness support and guidance",
      icon: Brain
    },
    {
      name: "Pediatrics",
      description: "Child health and development guidance",
      icon: Users
    },
    {
      name: "Women's Health",
      description: "Specialized guidance for women's health concerns",
      icon: Heart
    },
    {
      name: "Senior Care",
      description: "Health guidance tailored for older adults",
      icon: Activity
    },
    {
      name: "Preventive Care",
      description: "Proactive health maintenance and prevention",
      icon: Shield
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      teal: "bg-teal-100 text-teal-600", 
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered healthcare services designed to support your health journey 
            with personalized guidance and instant medical information.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow relative">
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-teal-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${getColorClasses(service.color)}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/chat">
                    <Button className="w-full gradient-medical">
                      Try Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Medical Specialties */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Medical Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{specialty.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription>{specialty.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-teal-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-medical' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose MedCare?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Available 24/7</h3>
              <p className="text-gray-600">
                Get medical guidance whenever you need it, day or night, without waiting for appointments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 rounded-full">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your health information is protected with enterprise-grade security and strict privacy controls.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">
                Advanced artificial intelligence trained on medical knowledge to provide accurate information.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-12 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Countries</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust MedCare for their health guidance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Sign Up Free
              </Button>
            </Link>
              <Link href="/chat">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Try Chat Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
