<div class="row">
    @forelse($films as $film)
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                @if($film->poster)
                    <img src="{{ Storage::url($film->poster) }}" class="card-img-top" alt="{{ $film->title }}" style="height: 200px; object-fit: cover;">
                @else
                    <div class="card-img-top bg-secondary d-flex align-items-center justify-content-center" style="height: 200px;">
                        <i class="fas fa-film fa-3x text-white"></i>
                    </div>
                @endif
                <div class="card-body">
                    <h5 class="card-title">{{ $film->title }}</h5>
                    <p class="card-text">{{ Str::limit($film->description, 100) }}</p>
                    <p class="card-text">
                        <small class="text-muted">
                            <i class="fas fa-clock"></i> {{ $film->duration }} min |
                            <i class="fas fa-calendar"></i> {{ $film->release_date->format('Y-m-d') }}
                        </small>
                    </p>
                    <span class="badge bg-info">{{ $film->category->name }}</span>
                </div>
                <div class="card-footer">
                    <a href="{{ route('films.show', $film) }}" class="btn btn-sm btn-info">
                        <i class="fas fa-eye"></i> View
                    </a>
                    <a href="{{ route('films.edit', $film) }}" class="btn btn-sm btn-warning">
                        <i class="fas fa-edit"></i> Edit
                    </a>
                    <form action="{{ route('films.destroy', $film) }}" method="POST" class="d-inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure?')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>
    @empty
        <div class="col-12">
            <div class="alert alert-info">No films found.</div>
        </div>
    @endforelse
</div>