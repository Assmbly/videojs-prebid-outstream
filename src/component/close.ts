interface CloseComponentProps {
    onClick: (e: MouseEvent) => void;
}

export default function CloseComponent({ onClick }: CloseComponentProps): HTMLElement {
    const closeButton = document.createElement('div');
    closeButton.className = 'vjs-pop-close';
    closeButton.addEventListener('click', onClick);
    return closeButton;
}
