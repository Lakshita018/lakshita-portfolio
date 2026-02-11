import React, { useEffect, useRef } from 'react';

const NeuralNetworkBG = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    let particles = [];
    const particleCount = 120;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        baseOpacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }
    
    let time = 0;
    
    const draw = () => {
      // Clear canvas with dark background
      ctx.fillStyle = ' #0a0a23';
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
        
        // Gentle opacity pulse
        particle.opacity = particle.baseOpacity * (0.8 + Math.sin(time * particle.pulseSpeed) * 0.2);
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 125, 236, ${particle.opacity})`;
        ctx.fill();
        
        // Add subtle glow for larger particles
        if (particle.size > 2) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size + 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 125, 236, ${particle.opacity * 0.2})`;
          ctx.fill();
        }
      });
      
      time += 1;
      requestAnimationFrame(draw);
    };
    
    draw();
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <canvas 
  ref={canvasRef}
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1, // must be below content
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    background: 'transparent'
  }}
/>
  );
};

export default NeuralNetworkBG;