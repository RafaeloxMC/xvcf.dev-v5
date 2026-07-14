import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function Home() {
	return (
		<div className="flex flex-col p-16 w-full">
			<div className="w-full">
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
			<div className="mt-16 w-full">
				<ContainerTextFlip
					words={["some of the music i made:"]}
					textClassName="text-4xl"
				/>
				<div>
					<iframe
						width="100%"
						height="300"
						allow="autoplay; encrypted-media"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2234001938%3Fsecret_token%3Ds-BHpAPcpo8eL&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
						className="rounded-lg"
					/>
					<div
						style={{
							fontSize: "10px",
							color: "#cccccc",
							lineBreak: "anywhere",
							overflow: "hidden",
							fontFamily:
								"Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
							fontWeight: 100,
						}}
					>
						<a
							href="https://soundcloud.com/xvcf"
							title="xvcf"
							target="_blank"
							style={{ color: "#cccccc", textDecoration: "none" }}
						>
							xvcf
						</a>{" "}
						·{" "}
						<a
							href="https://soundcloud.com/xvcf/super-taxi-sim-theme-song/s-BHpAPcpo8eL"
							title="Super Taxi Sim - Theme Song"
							target="_blank"
							style={{ color: "#cccccc", textDecoration: "none" }}
						>
							Super Taxi Sim - Theme Song
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
