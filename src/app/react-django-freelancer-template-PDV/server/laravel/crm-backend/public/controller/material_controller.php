namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function index()
    {
        // Dados fictícios para o exemplo; você deve substituí-los por dados reais de um banco de dados ou outra fonte
        $materials = [
            (object) [
                'title' => 'Material 1',
                'description' => 'Descrição do Material 1',
                'image_url' => 'https://via.placeholder.com/150',
                'download_url' => '#'
            ],
            (object) [
                'title' => 'Material 2',
                'description' => 'Descrição do Material 2',
                'image_url' => 'https://via.placeholder.com/150',
                'download_url' => '#'
            ]
            // Adicione mais materiais conforme necessário
        ];

        return view('materials', ['materials' => $materials]);
    }
}
