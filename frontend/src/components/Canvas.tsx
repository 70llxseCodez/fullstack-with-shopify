import { useEffect, useRef } from "react";

function Canvas({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  const myCanvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (myCanvas.current) {
      const context = myCanvas.current.getContext("2d");
      const image = new Image();
      image.src = src;
      context?.drawImage(image, 0, 0, 100, 100);
    }
  }, [src]);

  return <canvas ref={myCanvas} width={width} height={height} />;
}

export default Canvas;
