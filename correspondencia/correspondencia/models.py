from django.db import models

class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'

class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)

class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)

class AuthUser(models.Model):
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'

class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)

class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)

class Consecutivos(models.Model):
    tipo_documento = models.ForeignKey('TiposDocumento', models.DO_NOTHING, blank=True, null=True)
    unidad_departamento = models.ForeignKey('UnidadesDepartamentos', models.DO_NOTHING, blank=True, null=True)
    consecutivo = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'consecutivos'

class Correspondencia(models.Model):
    remitente = models.CharField(max_length=100)
    destinatario = models.CharField(max_length=100)
    fecha_recepcion = models.DateField(blank=True, null=True)
    fecha_envio = models.DateField(blank=True, null=True)
    tipo_documento = models.ForeignKey('TiposDocumento', models.DO_NOTHING, blank=True, null=True)
    numero_documento = models.CharField(max_length=50, blank=True, null=True)
    numero_folios = models.IntegerField(blank=True, null=True)
    estado = models.CharField(max_length=50, blank=True, null=True)
    usuario = models.ForeignKey('Usuarios', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'correspondencia'

class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'

class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)

class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'

class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'

class Roles(models.Model):
    nombre = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'roles'

class TiposDocumento(models.Model):
    nombre = models.CharField(max_length=50)
    prefijo_radicado = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'tipos_documento'

class UnidadesDepartamentos(models.Model):
    nombre = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'unidades_departamentos'

class Usuarios(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.CharField(unique=True, max_length=100)
    password_hash = models.CharField(max_length=255)
    rol = models.ForeignKey(Roles, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'usuarios'
