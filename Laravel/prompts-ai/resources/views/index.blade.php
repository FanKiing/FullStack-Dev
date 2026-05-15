@extends('layouts.app')
@section('content')
<a href="{{ route('prompts.create') }}" class="btn btn-primary">Ajouter</a>
<table class="table">
    <thead>
        <tr>
            <th>ID</th><th>Titre</th><th>Description</th><th>Prompt Text</th><th>Famille</th><th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach($prompts as $prompt)
        <tr>
            <td>{{ $prompt->id }}</td>
            <td>{{ $prompt->titre }}</td>
            <td>{{ $prompt->description }}</td>
            <td>{{ $prompt->prompt_text }}</td>
            <td>{{ $prompt->famille->titre }}</td>
            <td>
                <a href="{{ route('prompts.show', $prompt) }}">Voir</a>
                <a href="{{ route('prompts.edit', $prompt) }}">Modifier</a>
                <form action="{{ route('prompts.destroy', $prompt) }}" method="POST">
                    @csrf @method('DELETE')
                    <button type="submit">Supprimer</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
{{ $prompts->links() }}
@endsection