// Add styles once
const style = document.createElement('style');
style.textContent = `
.vendi-active {
    background-color: rgb(from var(--color-theme, var(--color-green)) r g b / 20%);
}
`;
document.head.appendChild(style);

// Function to highlight todos assigned to the current user
function highlightMyTodos() {
    const img = document.querySelector('#my_navigation .nav-menu__me .avatar');
    if (!img) return;

    const alt = img.getAttribute('title');

    document
        .querySelectorAll('.todos > .todo')
        .forEach((li) => {
            const liImg = li.querySelector('img.avatar[alt="' + alt + '"]');
            if (liImg) {
                li.classList.add('vendi-active');
            } else {
                li.classList.remove('vendi-active');
            }
        });
}

// Run initially
highlightMyTodos();

// Detect URL changes for SPA navigation
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        setTimeout(highlightMyTodos, 500);
    }
}).observe(document, { subtree: true, childList: true });

// Also listen for history API changes
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

history.pushState = function() {
    originalPushState.apply(this, arguments);
    setTimeout(highlightMyTodos, 500);
};

history.replaceState = function() {
    originalReplaceState.apply(this, arguments);
    setTimeout(highlightMyTodos, 500);
};

// Listen for back/forward button
window.addEventListener('popstate', () => {
    setTimeout(highlightMyTodos, 500);
});

// Watch for changes to all todo list containers
const observedContainers = new WeakSet();

const observeTodoLists = () => {
    const todoContainers = document.querySelectorAll('.todos');

    if (todoContainers.length === 0) {
        setTimeout(observeTodoLists, 1000);
        return;
    }

    const todoObserver = new MutationObserver((mutations) => {
        const hasNewTodos = mutations.some(mutation => {
            return mutation.type === 'childList' && mutation.addedNodes.length > 0;
        });

        if (hasNewTodos) {
            highlightMyTodos();
        }
    });

    todoContainers.forEach(container => {
        if (!observedContainers.has(container)) {
            todoObserver.observe(container, {
                childList: true,
                subtree: false
            });
            observedContainers.add(container);
        }
    });
};

// Start observing after initial highlight
setTimeout(observeTodoLists, 1000);
