
# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import UsuariosViewSet, CorrespondenciaViewSet, TiposDocumentoViewSet, UnidadesDepartamentosViewSet

router = DefaultRouter()
router.register(r'usuarios', UsuariosViewSet)
router.register(r'correspondencia', CorrespondenciaViewSet)
router.register(r'tipos_documento', TiposDocumentoViewSet)
router.register(r'unidades_departamento', UnidadesDepartamentosViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('usuarios/', views.create_user, name='create_user'),
]
