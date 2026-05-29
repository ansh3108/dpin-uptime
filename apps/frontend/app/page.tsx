"use client"
import { useState } from 'react';
import {
  Activity,
  Shield,
  Zap,
  Bell,
  TrendingUp,
  Globe,
  Check,
  ChevronRight,
  Monitor,
  Sparkles,
  Clock,
  BarChart3,
  ArrowRight,
  Star,
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [activePricing, setActivePricing] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    {
      icon: <Activity className="w-7 h-7" />,
      title: 'Real-Time Monitoring',
      description: 'Monitor your services 24/7 with checks every 30 seconds. Get instant insights into uptime, response times, and performance metrics.',
    },
    {
      icon: <Bell className="w-7 h-7" />,
      title: 'Instant Alerts',
      description: 'Receive alerts via email, Slack, PagerDuty, SMS, and webhooks. Never miss a critical incident with customizable escalation policies.',
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Status Pages',
      description: 'Beautiful, branded status pages that keep your customers informed. Build trust with transparent incident communication.',
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Performance Analytics',
      description: 'Deep insights into response times, uptime trends, and incident patterns. Identify issues before they become outages.',
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'Global Monitoring Network',
      description: 'Monitor from 20+ locations worldwide. Detect regional issues and ensure availability for all your users.',
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'API & Integrations',
      description: 'Powerful REST API and webhooks. Integrate with your existing tools - Terraform, Kubernetes, CI/CD, and more.',
    },
  ];

  const stats = [
    { value: '99.99%', label: 'Average Uptime' },
    { value: '<30s', label: 'Check Interval' },
    { value: '50M+', label: 'Checks Daily' },
    { value: '10K+', label: 'Happy Teams' },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: { monthly: 29, yearly: 24 },
      description: 'Perfect for small teams and side projects',
      features: [
        'Up to 10 monitors',
        '30-second check interval',
        'Email & Slack alerts',
        '1 status page',
        '7-day data retention',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Pro',
      price: { monthly: 79, yearly: 66 },
      description: 'For growing teams that need more power',
      features: [
        'Up to 50 monitors',
        '15-second check interval',
        'All alert channels',
        'Unlimited status pages',
        '90-day data retention',
        'Advanced analytics',
        'Team collaboration',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: 249, yearly: 207 },
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited monitors',
        '5-second check interval',
        'Custom alert integrations',
        'White-label status pages',
        '1-year data retention',
        'Dedicated account manager',
        'SLA guarantees',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote: "UptimeGuard has reduced our incident response time by 70%. The real-time alerts are a game-changer for our team.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "Streamline Technologies",
      avatar: "https://images.pexels.com/photos/7749094/pexels-photo-7749094.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      quote: "The status pages feature alone is worth the price. Our customers love the transparency, and our support tickets dropped by 40%.",
      author: "Marcus Rodriguez",
      role: "CTO",
      company: "DataFlow Inc",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      quote: "Finally, a monitoring solution that just works. Setup took 5 minutes, and we had complete visibility into our infrastructure.",
      author: "Emily Watson",
      role: "DevOps Lead",
      company: "CloudScale",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 shadow-lg mb-8">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-gray-300">Now with AI-powered anomaly detection</span>
            <ArrowRight className="w-4 h-4 text-gray-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-white">Better Uptime Monitoring</span>
            <span className="block bg-gradient-to-r from-primary-400 via-cyan-400 to-accent-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              For Modern Teams
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Monitor your websites, APIs, and services with enterprise-grade reliability.
            Get instant alerts, beautiful status pages, and deep performance insights—all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2">
              Start Monitoring Free
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2">
              <Monitor className="w-5 h-5" />
              View Demo
            </button>
          </div>

          {/* Hero Image/Stats Card */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800 bg-gray-900/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-500 font-mono">dashboard.uptimeguard.io</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-accent-400">99.99%</div>
                    <div className="text-sm text-gray-500">Overall Uptime</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-primary-400">142ms</div>
                    <div className="text-sm text-gray-500">Avg Response</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white">24</div>
                    <div className="text-sm text-gray-500">Active Monitors</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-green-400">0</div>
                    <div className="text-sm text-gray-500">Current Incidents</div>
                  </div>
                </div>

                {/* Monitor List */}
                <div className="space-y-3">
                  {['API Gateway', 'Web Application', 'Database Cluster', 'CDN Edge'].map((service, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-medium">{service}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">45ms</span>
                        <span className="text-sm font-medium text-green-400">Operational</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 text-center">
            <p className="text-sm text-gray-500 mb-6">Trusted by engineering teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-40">
              {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma', 'Supabase'].map((company) => (
                <span key={company} className="text-2xl font-bold tracking-tight">{company}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to stay <span className="text-primary-400">online</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive monitoring tools designed for modern infrastructure. From simple websites to complex microservices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4 text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Up and running in <span className="text-accent-400">minutes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No complex setup required. Start monitoring your infrastructure in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Add Your Endpoints', description: 'Enter your website URL, API endpoint, or server address. We support HTTP, HTTPS, TCP, and more.', icon: <Globe className="w-8 h-8" /> },
              { step: '02', title: 'Configure Alerts', description: 'Choose how you want to be notified. Email, Slack, PagerDuty, SMS, webhooks—you decide.', icon: <Bell className="w-8 h-8" /> },
              { step: '03', title: 'Stay Protected', description: 'We monitor 24/7 and alert you instantly when something goes wrong. Relax while we watch your back.', icon: <Shield className="w-8 h-8" /> },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-bold text-gray-800/50 absolute -top-8 -left-4">{item.step}</div>
                <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, transparent <span className="text-primary-400">pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              No hidden fees. No surprises. Choose the plan that fits your needs.
            </p>

            {/* Pricing Toggle */}
            <div className="inline-flex items-center bg-gray-800/50 rounded-full p-1 border border-gray-700">
              <button
                onClick={() => setActivePricing('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activePricing === 'monthly' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActivePricing('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                  activePricing === 'yearly' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="text-xs text-accent-400 bg-accent-400/10 px-2 py-0.5 rounded-full">Save 18%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary-900/50 to-gray-900/50 border-primary-500/50 shadow-xl shadow-primary-500/20'
                    : 'bg-gray-900/50 border-gray-800'
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-accent-500 text-xs font-bold px-4 py-1">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">
                      ${plan.price[activePricing]}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/30 transform hover:scale-105'
                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="text-accent-400">engineering teams</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what our customers have to say about UptimeGuard
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-3xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-r from-gray-900 to-gray-900/50 rounded-3xl border border-gray-800 p-12 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to protect your uptime?
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of teams who trust UptimeGuard to keep their services online. Start your free 14-day trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:flex-1 px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-white placeholder-gray-500"
                  />
                  <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
                    Start Free Trial
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  No credit card required · Setup in 2 minutes · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">UptimeGuard</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Better uptime monitoring for modern teams. Know immediately when something goes wrong.
              </p>
            </div>

            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Integrations', 'Status Pages', 'API'],
              },
              {
                title: 'Resources',
                links: ['Documentation', 'Blog', 'Changelog', 'Support'],
              },
              {
                title: 'Company',
                links: ['About', 'Careers', 'Contact', 'Press Kit'],
              },
              {
                title: 'Legal',
                links: ['Privacy', 'Terms', 'Security', 'GDPR'],
              },
            ].map((group, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2024 UptimeGuard. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
