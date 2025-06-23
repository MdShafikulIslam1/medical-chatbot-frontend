"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Bell, Calendar, FileText, Heart, MessageSquare, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Chat Sessions",
      value: "12",
      description: "This month",
      icon: MessageSquare,
      color: "text-blue-600",
      trend: "+3 from last month"
    },
    {
      title: "Health Score",
      value: "85%",
      description: "Based on assessments",
      icon: Activity,
      color: "text-green-600",
      trend: "+5% improvement"
    },
    {
      title: "Appointments",
      value: "3",
      description: "Upcoming",
      icon: Calendar,
      color: "text-purple-600",
      trend: "Next: Tomorrow"
    },
    {
      title: "Reports",
      value: "5",
      description: "Available",
      icon: FileText,
      color: "text-orange-600",
      trend: "2 new this week"
    }
  ];

  const recentActivities = [
    {
      type: "chat",
      title: "General Health Inquiry",
      description: "Asked about headache symptoms",
      time: "2 hours ago",
      status: "completed"
    },
    {
      type: "assessment",
      title: "Symptom Assessment",
      description: "Completed respiratory health check",
      time: "1 day ago",
      status: "completed"
    },
    {
      type: "medication",
      title: "Medication Reminder",
      description: "Blood pressure medication taken",
      time: "2 days ago",
      status: "completed"
    },
    {
      type: "appointment",
      title: "Appointment Scheduled",
      description: "Annual checkup with Dr. Smith",
      time: "3 days ago",
      status: "scheduled"
    }
  ];

  const healthReminders = [
    {
      type: "urgent",
      title: "Annual Checkup",
      description: "Due in 2 weeks",
      action: "Schedule",
      priority: "high"
    },
    {
      type: "medication",
      title: "Blood Pressure Medication",
      description: "Take with breakfast",
      action: "Mark Taken",
      priority: "medium"
    },
    {
      type: "exercise",
      title: "Weekly Exercise Goal",
      description: "3/5 days completed",
      action: "Log Activity",
      priority: "low"
    },
    {
      type: "hydration",
      title: "Daily Water Intake",
      description: "6/8 glasses consumed",
      action: "Update",
      priority: "low"
    }
  ];

  const healthMetrics = [
    {
      name: "Blood Pressure",
      value: "120/80",
      status: "normal",
      lastUpdated: "Yesterday"
    },
    {
      name: "Heart Rate",
      value: "72 bpm",
      status: "normal",
      lastUpdated: "2 hours ago"
    },
    {
      name: "Weight",
      value: "165 lbs",
      status: "stable",
      lastUpdated: "3 days ago"
    },
    {
      name: "Sleep",
      value: "7.5 hrs",
      status: "good",
      lastUpdated: "Last night"
    }
  ];

  const upcomingAppointments = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Family Medicine",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "Annual Checkup"
    },
    {
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "Next Week",
      time: "2:30 PM",
      type: "Follow-up"
    },
    {
      doctor: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      date: "Dec 15",
      time: "11:00 AM",
      type: "Consultation"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
      case "good":
      case "completed":
        return "text-green-600 bg-green-100";
      case "stable":
      case "scheduled":
        return "text-blue-600 bg-blue-100";
      case "urgent":
      case "high":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h1>
          <p className="text-gray-600">Here's your health overview for today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <p className="text-xs text-green-600 mt-1">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Health Reminders */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-orange-600" />
                Health Reminders
              </CardTitle>
              <CardDescription>Important health tasks for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthReminders.map((reminder, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-sm">{reminder.title}</p>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            reminder.priority === 'high' ? 'border-red-200 text-red-700' :
                            reminder.priority === 'medium' ? 'border-yellow-200 text-yellow-700' :
                            'border-green-200 text-green-700'
                          }`}
                        >
                          {reminder.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600">{reminder.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-2">
                      {reminder.action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-blue-600" />
                Recent Activities
              </CardTitle>
              <CardDescription>Your latest health-related activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                        {activity.type === 'chat' && <MessageSquare className="h-4 w-4" />}
                        {activity.type === 'assessment' && <Activity className="h-4 w-4" />}
                        {activity.type === 'medication' && <Heart className="h-4 w-4" />}
                        {activity.type === 'appointment' && <Calendar className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-gray-600">{activity.description}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Metrics and Appointments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Health Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Health Metrics
              </CardTitle>
              <CardDescription>Your latest vital signs and health data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{metric.name}</p>
                      <p className="text-xs text-gray-600">Last updated: {metric.lastUpdated}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{metric.value}</p>
                      <Badge variant="outline" className={getStatusColor(metric.status)}>
                        {metric.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your scheduled medical appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{appointment.doctor}</p>
                      <p className="text-xs text-gray-600">{appointment.specialty}</p>
                      <p className="text-xs text-blue-600">{appointment.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{appointment.date}</p>
                      <p className="text-xs text-gray-600">{appointment.time}</p>
                      <Button variant="outline" size="sm" className="mt-1">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <CardTitle>Start Chat Session</CardTitle>
              <CardDescription>Get instant health guidance from our AI assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full gradient-medical">Chat Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle>Symptom Checker</CardTitle>
              <CardDescription>Assess your symptoms and get preliminary guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">Check Symptoms</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <CardTitle>Health Report</CardTitle>
              <CardDescription>Generate a comprehensive health summary report</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">Generate Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
