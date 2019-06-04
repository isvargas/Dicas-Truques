<h1>TESTE TAG VIDEO HTML 5</h1>
<video id="video" src="http://site.com.br/video.mp4" 
        width="426" 
        height="240"  
        controls
        poster="http://site.com.br/imagem.jpg"         
 >
</video>  
<br><br>
<label id="legenda"></label>
<br><br>
<button onclick="getTime()">GET TIME</button>
<br>
<input type="text" id="tempo" value="0">
<button onclick="setTime()">SET TIME</button>

<script>
    var v = document.getElementById('video');
    var t = document.getElementById('tempo');    
    var l = document.getElementById('legenda');
    
    //funcoes
    function getTime() {        
        var time = v.currentTime;  
        t.value = time;
    }
    
    function setTime() {
        v.currentTime = t.value;
    }
    
    //alguns eventos da tag VIDEO
    v.onplay = function() {
        l.innerHTML = 'Executando...';
    };
    
    v.onpause = function() {
        l.innerHTML = 'O video foi parado em ' + v.currentTime + ' segundos.';
    };
    
    v.onended = function() {
        l.innerHTML = 'Terminou. Por hoje é só pessoal :P';
    };
    
    v.onwaiting = function() {
        l.innerHTML = 'Carregando. Aguarde...';
    };
    
    v.ontimeupdate  = function() {
        l.innerHTML = 'Executando...<br>' + v.currentTime;
    };
    
    v.onerror = function() {
        l.innerHTML = 'Erro ao excutar vídeo.';
    };
</script>
