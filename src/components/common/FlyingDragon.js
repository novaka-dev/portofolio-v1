  "use client";

  import { useEffect, useRef, useState } from "react";

  const FRAME_WIDTH = 144;
  const FRAME_HEIGHT = 128;
  const FRAME_DURATION = 130; // ms per frame
  const FRAMES_PER_DIRECTION = 3;
  const SPEED = 1; // px per frame

  const directions = {
    up: 0,
    right: 1,
    down: 2,
    left: 3,
  };

  function getDirectionFromDelta(dx, dy) {
    const angle = Math.atan2(dy, dx);
    const deg = (angle * 180) / Math.PI;

    if (deg >= -45 && deg <= 45) return "right";
    if (deg > 45 && deg < 135) return "down";
    if (deg >= 135 || deg <= -135) return "left";
    return "up";
  }

  export default function FlyingDragon() {
    const [direction, setDirection] = useState("down");
    const [frame, setFrame] = useState(0);
    const [dragonPos, setDragonPos] = useState({ x: 0, y: 0 });
    const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

    const animationRef = useRef();
    const lastFrameTimeRef = useRef(0);

    // 🖱️ Track posisi mouse
    useEffect(() => {
      const handleMouseMove = (e) => {
        setTargetPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // 🐉 Gerakin naga tiap frame
    useEffect(() => {
      const animate = (timestamp) => {
        const { x: dx, y: dy } = {
          x: targetPos.x - dragonPos.x,
          y: targetPos.y - dragonPos.y,
        };
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          const directionStr = getDirectionFromDelta(dx, dy);
          setDirection(directionStr);

          const moveX = (dx / distance) * SPEED;
          const moveY = (dy / distance) * SPEED;

          setDragonPos((prev) => ({
            x: prev.x + moveX,
            y: prev.y + moveY,
          }));
        }

        // Update frame sprite tiap FRAME_DURATION
        if (timestamp - lastFrameTimeRef.current >= FRAME_DURATION) {
          setFrame((prev) => (prev + 1) % FRAMES_PER_DIRECTION);
          lastFrameTimeRef.current = timestamp;
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationRef.current);
    }, [targetPos, dragonPos]);

    const row = directions[direction];
    const backgroundX = -frame * FRAME_WIDTH;
    const backgroundY = -row * FRAME_HEIGHT;

    return (
      <div
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          position: "fixed",
          top: dragonPos.y - FRAME_HEIGHT / 1,
          left: dragonPos.x - FRAME_WIDTH / 1,
          pointerEvents: "none",
          backgroundImage: "url('/assets/flying_twin_headed_dragon-red.png')",
          backgroundPosition: `${backgroundX}px ${backgroundY}px`,
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
          zIndex: 9999,
        }}
      />
    );
  }
