"use client";
import { motion } from "motion/react";
import Image from "next/image";

function EmojiThreeC() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2, delay: 1.75, ease: "easeInOut" }}
		>
			<Image
				src={"/3c.png"}
				alt="Emoji :3c:"
				width={64}
				height={64}
				className="w-4 h-4 aspect-square mb-2 -translate-x-3.5"
			/>
		</motion.div>
	);
}

export default EmojiThreeC;
