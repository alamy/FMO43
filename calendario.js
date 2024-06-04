document.addEventListener('DOMContentLoaded', function() {
    const calendarDates = document.getElementById('calendar-dates');
    const year = 2024;
    const month = 5; // Junho (os meses em JavaScript são indexados de 0 a 11)

    // Função para obter o número de dias em um mês específico
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    // Função para obter o dia da semana do primeiro dia do mês
    function getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }

    // Preencher o calendário com os dias
    function populateCalendar(year, month) {
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        
        // Adiciona os dias do mês anterior como placeholders
        for (let i = 0; i < firstDay; i++) {
            const placeholder = document.createElement('div');
            calendarDates.appendChild(placeholder);
        }

        // Adiciona os dias do mês atual
        for (let day = 1; day <= daysInMonth; day++) {
            const dateElement = document.createElement('div');
            dateElement.textContent = day;
            calendarDates.appendChild(dateElement);
        }
    }

    populateCalendar(year, month);
});