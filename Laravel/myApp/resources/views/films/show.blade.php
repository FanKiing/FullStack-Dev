@extends('layouts.master')

@section('title', $film->title)

@section('content')
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h2>{{ $film->title }}</h2>
                <div>
                    <a href="{{ route('films.edit', $film) }}" class="btn btn-warning">
                        <i class="fas fa-edit"></i> Edit
                    </a>
                    <a href="{{ route('films.index') }}" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> Back
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    @if($film->poster)
                        <img src="{{ Storage::url($film->poster) }}" class="img-fluid rounded" alt="{{ $film->title }}">
                    @else
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-center" style="height: 300px;">
                            <i class="fas fa-film fa-5x text-white"></i>
                        </div>
                    @endif
                </div>
                <div class="col-md-8">
                    <table class="table">
                        <tr>
                            <th style="width: 150px">Title:</th>
                            <td>{{ $film->title }}</td>
                        </tr>
                        <tr>
                            <th>Description:</th>
                            <td>{{ $film->description ?: 'No description available.' }}</td>
                        </tr>
                        <tr>
                            <th>Duration:</th>
                            <td>{{ $film->duration }} minutes</td>
                        </tr>
                        <tr>
                            <th>Release Date:</th>
                            <td>{{ $film->release_date->format('F d, Y') }}</td>
                        </tr>
                        <tr>
                            <th>Category:</th>
                            <td><span class="badge bg-info">{{ $film->category->name }}</span></td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="mt-4">
                <h3>Cast & Crew</h3>
                @if($film->actors->count() > 0)
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Actor</th>
                                    <th>Image</th>
                                    <th>Salary (Gain)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($film->actors as $actor)
                                    <tr>
                                        <td>{{ $actor->name }}</td>
                                        <td>
                                            @if($actor->image)
                                                <img src="{{ $actor->image }}" alt="{{ $actor->name }}" style="width: 50px; height: 50px; object-fit: cover;" class="rounded-circle">
                                            @else
                                                <i class="fas fa-user-circle fa-2x"></i>
                                            @endif
                                        </td>
                                        <td>${{ number_format($actor->pivot->salary, 2) }}</td>
                                        <td>
                                            <form action="{{ route('films.actors.detach', [$film, $actor]) }}" method="POST" class="d-inline">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Remove this actor from the film?')">
                                                    <i class="fas fa-unlink"></i> Detach
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                @else
                    <div class="alert alert-info">No actors assigned to this film yet.</div>
                @endif
            </div>
        </div>
    </div>
@endsection