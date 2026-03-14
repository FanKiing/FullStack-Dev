<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ajouter un séminaire</title>
</head>
<body>
    <h1>Ajouter un séminaire</h1>

    <form action="{{ route('seminaires.store') }}" method="POST">
        @csrf

        <label>Thème :</label>
        <input type="text" name="theme"><br><br>

        <label>Date début :</label>
        <input type="date" name="date_debut"><br><br>

        <label>Date fin :</label>
        <input type="date" name="date_fin"><br><br>

        <label>Description :</label>
        <textarea name="description"></textarea><br><br>

        <label>Coût journalier :</label>
        <input type="number" step="0.01" name="cout_journalier"><br><br>

        <label>Animateur :</label>
        <select name="animateur_id">
            @foreach($animateurs as $animateur)
                <option value="{{ $animateur->id }}">{{ $animateur->nom_complet }}</option>
            @endforeach
        </select><br><br>

        <button type="submit">Confirmer</button>
    </form>
</body>
</html>