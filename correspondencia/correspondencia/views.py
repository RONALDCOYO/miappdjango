
# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import Usuarios, Correspondencia, TiposDocumento, UnidadesDepartamentos
from .serializers import AuthUserSerializer, UsuariosSerializer, CorrespondenciaSerializer, TiposDocumentoSerializer, UnidadesDepartamentosSerializer

@api_view(['POST'])
def create_user(request):
    serializer = AuthUserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer

class CorrespondenciaViewSet(viewsets.ModelViewSet):
    queryset = Correspondencia.objects.all()
    serializer_class = CorrespondenciaSerializer

class TiposDocumentoViewSet(viewsets.ModelViewSet):
    queryset = TiposDocumento.objects.all()
    serializer_class = TiposDocumentoSerializer

class UnidadesDepartamentosViewSet(viewsets.ModelViewSet):
    queryset = UnidadesDepartamentos.objects.all()
    serializer_class = UnidadesDepartamentosSerializer
