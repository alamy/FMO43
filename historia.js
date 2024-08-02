const url = 'https://alamy.github.io/FMO43/img/RITO-SCHRO%CC%88DER.pdf'; // Coloque aqui a URL do seu PDF

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(pdf => {
    console.log('PDF loaded');

    const pdfViewer = document.getElementById('pdf-viewer');

    // Renderiza cada página do PDF
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        pdf.getPage(pageNum).then(page => {
            const viewport = page.getViewport({ scale: 0.5 });const url = 'https://alamy.github.io/FMO43/img/RITO-SCHRO%CC%88DER.pdf'; // URL do PDF

            const pdfjsLib = window['pdfjs-dist/build/pdf'];
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
            
            // Função para renderizar o PDF
            function renderPDF() {
                const loadingTask = pdfjsLib.getDocument(url);
                loadingTask.promise.then(pdf => {
                    console.log('PDF loaded');
            
                    const pdfViewer = document.getElementById('pdf-viewer');
            
                    // Limpa o conteúdo do visualizador antes de renderizar novamente
                    pdfViewer.innerHTML = '';
            
                    // Obtém a largura do contêiner
                    const containerWidth = pdfViewer.clientWidth;
            
                    // Renderiza cada página do PDF
                    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                        pdf.getPage(pageNum).then(page => {
                            // Calcula a escala baseada na largura do contêiner
                            const viewport = page.getViewport({ scale: 1 }); // Escala base 1 para obter as dimensões originais
                            const scale = containerWidth / viewport.width; // Ajusta a escala com base na largura do contêiner
                            const scaledViewport = page.getViewport({ scale: scale });
            
                            const canvas = document.createElement('canvas');
                            const context = canvas.getContext('2d');
                            canvas.height = scaledViewport.height;
                            canvas.width = scaledViewport.width;
            
                            const renderContext = {
                                canvasContext: context,
                                viewport: scaledViewport
                            };
            
                            page.render(renderContext).promise.then(() => {
                                pdfViewer.appendChild(canvas);
                            });
                        });
                    }
                }, reason => {
                    console.error('Error: ' + reason);
                });
            }
            
            // Renderiza o PDF inicialmente
            renderPDF();
            
            // Adiciona um listener para redimensionamento da janela
            window.addEventListener('resize', renderPDF);
            
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