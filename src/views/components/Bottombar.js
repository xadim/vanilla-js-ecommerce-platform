let Bottombar = {
    render: async () => {
        const today = new Date();
        const date = today.getFullYear();
        const view = `
        <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
            <div class="container mx-auto px-6">
                <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div class="sm:w-2/3 text-center py-6">
                        <p class="text-sm text-blue-700 font-bold mb-2">
                            <a href="https://github.com/xadim">© ${date} by Hadim J.</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        `;
        return view
    },
    after_render: async () => { }
}

export default Bottombar;