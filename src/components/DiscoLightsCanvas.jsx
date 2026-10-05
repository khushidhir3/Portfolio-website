import React, { useEffect, useRef, useState } from 'react';

/**
 * DiscoLightsCanvas
 * High-performance ambient lighting engine rendering multi-beam disco lights,
 * rotating spotlights, laser fans, mirrorball sparkles, and mouse-tracked glow.
 */
const DiscoLightsCanvas = ({ mode = 'disco', enabled = true, mousePos }) => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles/stardust pool
    const sparkles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
      color: ['#FFE29A', '#E8DDD3', '#C4A5A0', '#F3C978', '#FFFFFF'][Math.floor(Math.random() * 5)],
      alpha: Math.random(),
      alphaSpeed: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
      shape: Math.random() > 0.6 ? 'star' : 'diamond',
    }));

    // Beams configuration
    const beams = [
      { angle: 0, speed: 0.008, color: 'rgba(243, 201, 120, 0.12)', width: 0.35, source: { x: 0.2, y: 0 } },
      { angle: Math.PI / 3, speed: -0.006, color: 'rgba(232, 221, 211, 0.09)', width: 0.45, source: { x: 0.8, y: 0 } },
      { angle: Math.PI / 2, speed: 0.011, color: 'rgba(196, 165, 160, 0.14)', width: 0.3, source: { x: 0.5, y: 0 } },
      { angle: Math.PI, speed: -0.009, color: 'rgba(255, 182, 193, 0.11)', width: 0.4, source: { x: 0.35, y: 0 } },
      { angle: Math.PI * 1.5, speed: 0.007, color: 'rgba(243, 201, 120, 0.10)', width: 0.38, source: { x: 0.65, y: 0 } },
    ];

    let time = 0;

    const drawStar = (cx, cy, spikes, outerRadius, innerRadius, color, alpha) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      // 1. Draw Disco Beams
      if (mode === 'disco' || mode === 'luxe') {
        beams.forEach((beam, idx) => {
          const srcX = width * beam.source.x;
          const srcY = height * beam.source.y;
          const currentAngle = beam.angle + time * (mode === 'disco' ? beam.speed * 2 : beam.speed * 0.8);
          const reach = Math.max(width, height) * 1.6;

          const endX1 = srcX + Math.cos(currentAngle - beam.width) * reach;
          const endY1 = srcY + Math.sin(currentAngle - beam.width) * reach;
          const endX2 = srcX + Math.cos(currentAngle + beam.width) * reach;
          const endY2 = srcY + Math.sin(currentAngle + beam.width) * reach;

          const grad = ctx.createRadialGradient(srcX, srcY, 10, srcX, srcY, reach);
          grad.addColorStop(0, mode === 'disco' ? beam.color.replace('0.1', '0.35') : beam.color);
          grad.addColorStop(0.5, beam.color);
          grad.addColorStop(1, 'transparent');

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(srcX, srcY);
          ctx.lineTo(endX1, endY1);
          ctx.lineTo(endX2, endY2);
          ctx.closePath();
          ctx.fillStyle = grad;
          ctx.globalCompositeOperation = 'screen';
          ctx.fill();
          ctx.restore();
        });

        // Disco Mirrorball Orb Center Pulsing Glow at top
        const ballX = width * 0.5;
        const ballY = 20;
        const ballGrad = ctx.createRadialGradient(ballX, ballY, 0, ballX, ballY, 320);
        ballGrad.addColorStop(0, 'rgba(255, 235, 180, 0.25)');
        ballGrad.addColorStop(0.3, 'rgba(228, 165, 152, 0.15)');
        ballGrad.addColorStop(0.7, 'rgba(166, 123, 123, 0.06)');
        ballGrad.addColorStop(1, 'transparent');

        ctx.save();
        ctx.fillStyle = ballGrad;
        ctx.globalCompositeOperation = 'screen';
        ctx.fillRect(0, 0, width, height * 0.5);
        ctx.restore();
      }

      // 2. Draw Interactive Mouse Spotlight Glow
      if (mousePos && mousePos.x !== null && mousePos.y !== null) {
        const mouseGrad = ctx.createRadialGradient(
          mousePos.x,
          mousePos.y,
          0,
          mousePos.x,
          mousePos.y,
          260
        );
        mouseGrad.addColorStop(0, 'rgba(255, 226, 154, 0.18)');
        mouseGrad.addColorStop(0.4, 'rgba(196, 165, 160, 0.09)');
        mouseGrad.addColorStop(0.8, 'rgba(92, 31, 31, 0.04)');
        mouseGrad.addColorStop(1, 'transparent');

        ctx.save();
        ctx.fillStyle = mouseGrad;
        ctx.globalCompositeOperation = 'screen';
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      // 3. Draw Stardust & Sparkles
      sparkles.forEach((s) => {
        s.x += s.speedX;
        s.y += s.speedY;
        s.alpha += s.alphaSpeed;

        if (s.alpha > 1) {
          s.alpha = 1;
          s.alphaSpeed = -Math.abs(s.alphaSpeed);
        } else if (s.alpha < 0.05) {
          s.alpha = 0.05;
          s.alphaSpeed = Math.abs(s.alphaSpeed);
          s.x = Math.random() * width;
          s.y = Math.random() * height;
        }

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        if (s.shape === 'star') {
          drawStar(s.x, s.y, 4, s.size * 2.8, s.size * 0.9, s.color, s.alpha);
        } else {
          ctx.save();
          ctx.fillStyle = s.color;
          ctx.globalAlpha = s.alpha * 0.7;
          ctx.fillRect(s.x - s.size / 2, s.y - s.size / 2, s.size * 1.5, s.size * 1.5);
          ctx.restore();
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [mode, enabled, mousePos]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-700 opacity-90"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default DiscoLightsCanvas;
