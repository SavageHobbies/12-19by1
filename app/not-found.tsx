
    "use client";

    import { useEffect, useRef } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from 'components/ui/button';
    import Link from 'next/link';

    export default function NotFound() {
      const canvasRef = useRef<HTMLCanvasElement>(null);
      const animationFrameRef = useRef<number | null>(null);

      useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d