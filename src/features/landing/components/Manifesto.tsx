'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HeartFilledIcon, LightningBoltIcon, StarFilledIcon, RocketIcon } from '@radix-ui/react-icons';
import { Shield, Users, Brain, Globe, Sparkles, Target, Clock, Heart, ChevronRight } from 'lucide-react';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import { Typography } from '@/components/ui/typography';
import { BorderGradient } from '@/components/ui/border-gradient';
import Link from 'next/link';

export const problemStats = [
  {
    value: '1 in 8',
    label: 'People living with a mental-health condition worldwide',
    icon: <Users className="size-5" />,
  },
  {
    value: '1 in 2',
    label: 'People likely to develop a mental-health disorder in their lifetime',
    icon: <Brain className="size-5" />,
  },
  {
    value: '48 days',
    label: 'Average wait for a first behavioural-health appointment in the U.S.',
    icon: <Clock className="size-5" />,
  },
  {
    value: '$1 T',
    label: 'Annual global cost of depression & anxiety in lost productivity',
    icon: <Target className="size-5" />,
  },
];

export const truthPoints = [
  {
    icon: <Heart className="size-5" />,
    title: 'Mental Health Is a Human Right',
    description: 'Yet 85% of people with a mental disorder receive no care at all. Access must be universal.',
  },
  {
    icon: <Clock className="size-5" />,
    title: "Crises Can't Wait",
    description: 'Half of all mental-health disorders start by age 18; help has to be instant, 24 ⁄ 7.',
  },
  {
    icon: <Users className="size-5" />,
    title: 'Isolation Hurts',
    description: 'Loneliness raises depression risk by up to 30% and is now treated as a public-health epidemic.',
  },
  {
    icon: <Shield className="size-5" />,
    title: 'Trust Is Non-Negotiable',
    description:
      'Nearly three-quarters of users rank data privacy as their top concern when choosing mental-health apps. Confidentiality is sacred.',
  },
];

const solutionFeatures = [
  {
    icon: <Brain className="size-5" />,
    title: 'AI-Powered Empathy',
    description:
      'Emma combines advanced AI with deep emotional understanding to provide personalized, compassionate support that feels genuinely human.',
  },
  {
    icon: <Clock className="size-5" />,
    title: '24/7 Availability',
    description:
      'Mental health support whenever you need it. No appointments, no waiting lists, no barriers—just immediate, caring assistance.',
  },
  {
    icon: <Globe className="size-5" />,
    title: 'Universal Accessibility',
    description:
      'Breaking down geographical, financial, and social barriers to make mental healthcare accessible to everyone, everywhere.',
  },
  {
    icon: <LightningBoltIcon className="size-5" />,
    title: 'Instant Response',
    description:
      "In moments of crisis, every second matters. Emma provides immediate support when traditional systems fail or aren't available.",
  },
];

export const Manifesto = () => {
  return (
    <div className="relative">
      <section className="relative z-10 w-full bg-black/90 py-20 md:py-32">
        <GalaxySpots />
        <SparklesEffect count={10} />
        <div className="container relative z-10 mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent">
                The Problem
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-red-500 to-transparent" />
            </div>
            <Typography
              as="h2"
              variant="h2"
              className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
            >
              The Mental Health Crisis
            </Typography>
            <Typography as="p" className="mx-auto mb-12 max-w-3xl text-lg text-zinc-400">
              Traditional mental healthcare is failing millions of people. The system is overwhelmed, inaccessible, and
              leaves too many suffering in silence.
            </Typography>
          </motion.div>
          <div className="prose prose-invert max-w-none">
            {problemStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 border-l-4 border-red-500/30 pl-6"
              >
                <div className="mb-2 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    {stat.icon}
                  </div>
                  <Typography as="h3" className="text-2xl font-bold text-red-400">
                    {stat.value}
                  </Typography>
                </div>
                <Typography as="p" className="ml-12 text-zinc-300">
                  {stat.label}
                </Typography>
              </motion.div>
            ))}
          </div>{' '}
        </div>
      </section>
      {/* The Truth Section */}
      <section className="relative z-10 w-full bg-zinc-950/90 py-20 md:py-32">
        <GalaxySpots />
        <SparklesEffect count={10} />
        <div className="container relative z-10 mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent">
                The Truth
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
            </div>
            <Typography
              as="h2"
              variant="h2"
              className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
            >
              What We Believe
            </Typography>
            <Typography as="p" className="mx-auto mb-12 max-w-3xl text-lg text-zinc-400">
              These fundamental truths drive everything we do. They represent our unwavering commitment to making mental
              healthcare truly accessible.
            </Typography>
          </motion.div>
          <div className="prose prose-invert max-w-none">
            {truthPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 border-l-4 border-blue-500/30 pl-6"
              >
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    {point.icon}
                  </div>
                  <Typography as="h3" variant="h3" className="text-xl font-semibold text-blue-400">
                    {point.title}
                  </Typography>
                </div>
                <Typography as="p" className="ml-14 leading-relaxed text-zinc-300">
                  {point.description}
                </Typography>
              </motion.div>
            ))}
          </div>{' '}
        </div>
      </section>
      <section className="relative z-10 w-full bg-black/90 py-20 md:py-24">
        <GalaxySpots />
        <SparklesEffect count={10} />
        <div className="container relative z-10 mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4CAF50]" />
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent">
                The Solution
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-[#4CAF50] to-transparent" />
            </div>
            <Typography
              as="h2"
              variant="h2"
              className="mb-6 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
            >
              How Emma Changes Everything
            </Typography>
            <Typography as="p" className="mx-auto mb-12 max-w-3xl text-lg text-zinc-400">
              Emma represents a new paradigm in mental healthcare—one that prioritizes accessibility, immediacy, and
              genuine human connection through AI.
            </Typography>
          </motion.div>
          <div className="prose prose-invert max-w-none">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 border-l-4 border-[#4CAF50]/30 pl-6"
              >
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4CAF50]/10 text-[#4CAF50]">
                    {feature.icon}
                  </div>
                  <Typography as="h3" variant="h3" className="text-xl font-semibold text-[#4CAF50]">
                    {feature.title}
                  </Typography>
                </div>
                <Typography as="p" className="ml-14 leading-relaxed text-zinc-300">
                  {feature.description}
                </Typography>
              </motion.div>
            ))}
          </div>{' '}
        </div>
      </section>
      {/* Call to Action */}
      <section className="relative z-10 mx-auto mb-10 max-w-6xl overflow-hidden px-4">
        <BorderGradient containerClassName="w-full" gradientClassName="from-[#4CAF50] via-[#7CB342] to-[#8BC34A]">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 to-black px-6 py-10 sm:px-10 sm:py-16">
            <SparklesEffect count={20} />
            <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">Join the Revolution</h3>
                <p className="max-w-md text-zinc-400">
                  Be part of a movement that's transforming mental healthcare. Experience Emma today and discover what
                  compassionate, accessible AI support feels like. Together, we can create a world where no one suffers
                  alone.
                </p>
              </div>
              <Link
                href="/login"
                className="inline-flex h-14 items-center justify-center rounded-md bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] px-8 py-3 text-base font-medium text-white shadow-[0_0_20px_rgba(76,175,80,0.3)] transition-all hover:shadow-[0_0_25px_rgba(76,175,80,0.5)] focus:outline-none"
              >
                <HeartFilledIcon className="mr-2 size-5" />
                <span>Start Your Journey</span>
                <ChevronRight className="ml-2 size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </BorderGradient>
      </section>
    </div>
  );
};
