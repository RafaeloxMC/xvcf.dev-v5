import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function Home() {
	return (
		<div className="flex flex-col p-16 ">
			<h1>
				<ContainerTextFlip
					words={["hey, im xvcf"]}
					textClassName="text-4xl"
				/>
			</h1>
			<ContainerTextFlip
				words={["i like to code!", "i make music!"]}
				animationDuration={700}
			/>
		</div>
	);
}
