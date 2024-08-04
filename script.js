document.addEventListener('DOMContentLoaded', () => {
    const shareButtons = document.querySelectorAll('.tile-share-button');
    shareButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const linkElement = button.closest('a');
            const link = linkElement.href;

            navigator.clipboard.writeText(link).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
});
