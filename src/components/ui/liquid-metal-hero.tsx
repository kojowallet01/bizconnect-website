"use client";

import { LiquidMetal, liquidMetalPresets } from '@paper-design/shaders-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
}

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: LiquidMetalHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1
    }
  };

  const fullScreenPreset = liquidMetalPresets[2];
  const presetParams = fullScreenPreset && 'params' in fullScreenPreset ? fullScreenPreset.params : fullScreenPreset;

  return (
    <section className="relative min-h-screen w-full max-w-[100vw] flex items-center justify-center overflow-hidden box-border">
      {/* Shader contained to hero only — absolute, fills section */}
      <div className="absolute inset-0 z-0">
        <LiquidMetal
          {...presetParams}
          colorBack="#020a14"
          colorTint="#0d3d52"
          speed={0.45}
          distortion={0.035}
          softness={0.25}
          repetition={1.2}
          shiftRed={0.15}
          shiftBlue={0.15}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden
        style={{
          background: "linear-gradient(180deg, rgba(2,10,20,0.75) 0%, rgba(2,10,20,0.5) 40%, rgba(2,10,20,0.85) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[100vw] container mx-auto px-4 sm:px-6 lg:px-8 box-border" style={{ maxWidth: 'min(1280px, 100%)' }}>
        <motion.div 
          className="text-center space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {badge && (
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              <Badge 
                variant="secondary" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/15 transition-colors duration-300 backdrop-blur-sm text-xs sm:text-sm"
              >
                {badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <motion.h1 
              role="heading" 
              aria-level={1}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] px-1"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="max-w-3xl mx-auto text-base sm:text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            variants={buttonVariants}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={onPrimaryCtaClick}
                size="lg"
                className="bg-white text-[#020a14] hover:bg-white/95 transition-all duration-300 shadow-xl text-lg px-8 py-6 font-semibold whitespace-nowrap"
              >
                {primaryCtaLabel}
              </Button>
            </motion.div>
            
            {secondaryCtaLabel && onSecondaryCtaClick && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  onClick={onSecondaryCtaClick}
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm text-lg px-8 py-6 font-semibold whitespace-nowrap"
                >
                  {secondaryCtaLabel}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
