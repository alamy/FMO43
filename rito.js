const url = 'https://alamy.github.io/FMO43/img/Cartilha.pdf'; // Coloque aqui a URL do seu PDF

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(pdf => {
    console.log('PDF loaded');

    const pdfViewer = document.getElementById('pdf-viewer');

    // Renderiza cada página do PDF
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        pdf.getPage(pageNum).then(page => {
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext).promise.then(() => {
                pdfViewer.appendChild(canvas);
            });
        });
    }
}, reason => {
    console.error('Error: ' + reason);
});