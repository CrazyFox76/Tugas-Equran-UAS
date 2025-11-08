
            function loadSurahList() {
                $('#loading').show();

                fetch(`${apiBaseUrl}/surat`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        $('#loading').hide();}
                        console.log('Data Received:', data);

                        if (Data.data && Array.isArray(Data.data)) {
                            allSurahs = Data.data;
                            displaySurahList(allSurahs);
                        } else {
                            throw new Error('Data Structure not recognized');
                        }
                    })
                    .catch(error => {
                        $('#loading').hide();
                        console.error('Error:', error);
                        alert('gagal load data surahh' + error.message);
                    });
            }