import { MarkdownRenderChild, Plugin } from "obsidian";
import { EmbeddableMarkdownEditor } from "./EmbeddableMarkdownEditor";

export default class MyPlugin extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor("emde", (source, el, ctx) => {
			const mdrc = new MarkdownRenderChild(el);
			ctx.addChild(mdrc);

			el.createEl("br");
			const emde = new EmbeddableMarkdownEditor(
				this.app,
				el,
				{
					value: "Hello there",
				},
				ctx.sourcePath
			);
			el.createEl("br");

			mdrc.register(() => emde.destroy());
		});

		this.rebuildLeaves();
	}

	rebuildLeaves(): void {
		this.app.workspace.iterateAllLeaves((leaf) => {
			leaf.rebuildView();
		});
	}

	onunload() {}
}
