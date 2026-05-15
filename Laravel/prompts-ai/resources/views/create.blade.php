@extends('layouts.app')
@section('content')
<h1>Ajouter un nouveau prompt</h1>
<form action="{{ route('prompts.store') }}" method="POST">
    @csrf
    <input type="text" name="titre" placeholder="Titre" class="form-control">
    <textarea name="description" placeholder="Description" class="form-control"></textarea>
    <textarea name="prompt_text" placeholder="Prompt Text" class="form-control"></textarea>
    <select name="famille_id" class="form-control">
        @foreach($familles as $famille)
            <option value="{{ $famille->id }}">{{ $famille->titre }}</option>
        @endforeach
    </select>
    <button type="submit" class="btn btn-success">Ajouter</button>
    <a href="{{ route('prompts.index') }}" class="btn btn-secondary">Retour</a>
</form>
@endsection