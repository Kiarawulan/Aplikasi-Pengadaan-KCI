<?php

namespace App\Http\Controllers;

use App\Models\MasterReference;
use Illuminate\Http\Request;

class MasterReferenceController extends Controller
{
    public function index(string $category)
    {
        return response()->json($this->items($category));
    }

    public function options(string $category)
    {
        $items = collect($this->items($category))
            ->filter(function (array $item) {
                $status = strtolower((string) ($item['status'] ?? 'aktif'));
                return ! in_array($status, ['non-aktif', 'nonaktif', 'inactive', 'blacklist'], true);
            })
            ->sortBy(fn (array $item) => strtolower((string) ($item['nama'] ?? $item['kode'] ?? $item['id'] ?? '')))
            ->values();

        return response()->json($items);
    }

    public function bootstrap(Request $request, string $category)
    {
        // Kompatibilitas untuk frontend lama: jangan pernah memasukkan data contoh lagi.
        return response()->json($this->items($category));
    }

    public function store(Request $request, string $category)
    {
        $item = $request->validate(['id' => ['required', 'string'], 'data' => ['required', 'array']]);
        $record = MasterReference::updateOrCreate(
            ['category' => $category, 'reference_id' => $item['id']],
            ['data' => ['id' => $item['id'], ...$item['data']]],
        );
        return response()->json($record->data, 201);
    }

    public function update(Request $request, string $category, string $referenceId)
    {
        $data = $request->validate(['data' => ['required', 'array']]);
        $record = MasterReference::where('category', $category)->where('reference_id', $referenceId)->firstOrFail();
        $record->data = ['id' => $referenceId, ...$data['data']];
        $record->save();
        return response()->json($record->data);
    }

    public function destroy(string $category, string $referenceId)
    {
        MasterReference::where('category', $category)->where('reference_id', $referenceId)->firstOrFail()->delete();
        return response()->json(['message' => 'Data master berhasil dihapus dari database.']);
    }

    private function items(string $category): array
    {
        return MasterReference::where('category', $category)->orderBy('id')->get()->pluck('data')->values()->all();
    }
}
