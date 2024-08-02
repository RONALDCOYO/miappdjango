# serializers.py
from rest_framework import serializers
from .models import AuthUser
from .models import Usuarios, Correspondencia, TiposDocumento, UnidadesDepartamentos

class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUser
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined']

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'

class CorrespondenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Correspondencia
        fields = '__all__'

class TiposDocumentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TiposDocumento
        fields = '__all__'

class UnidadesDepartamentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadesDepartamentos
        fields = '__all__'
