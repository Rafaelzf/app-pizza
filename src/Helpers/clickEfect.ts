export const clickEfect = (
	change: boolean,
	e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
	let elementId: any = parseInt(e.currentTarget.id);
	elementId = parseInt(elementId);

	if (change !== true) {
		console.log("i");
		if (!!e.currentTarget.parentElement?.childNodes.length) {
			for (
				let i = 0;
				i < e.currentTarget.parentElement?.childNodes.length;
				i++
			) {
				if (i !== elementId) {
					e.currentTarget.parentElement
						.getElementsByTagName("a")
						.item(i)
						?.classList.remove("active");
				} else {
					e.currentTarget.parentElement
						.getElementsByTagName("a")
						.item(i)
						?.classList.toggle("active");
				}
			}
		}
	}
};
